import { VerificaEmailService } from './services/verifica-email.service';
import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { DropdownService } from './../shared/services/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, distinctUntilChanged, map, tap } from 'rxjs';
import { EstadoBr } from '../shared/model/estado-br.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent {

  formulario!: FormGroup;
  // estados: EstadoBr[] = [];
  estados: Observable<EstadoBr[]> | undefined;
  cargos: any[] = [];
  tecnologias: any[] = [];
  newsletterOp: any[] = [];
  frameworks = ['Angular', 'React','Vue','Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) { }

  ngOnInit(): void {
    // this.verificaEmailService.verificarEmail('email@email.com').subscribe();
    this.cargos = this.dropdownService.getCargos();
    this.estados = this.dropdownService.getEstadosBr();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();
    // this.dropdownService.getEstadosBr()
    //   .subscribe(dados => {
    //     this.estados = dados
    //     console.log(dados);
        
      // });

      this.formulario = this.formBuilder.group({
        nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        email: [null, [Validators.required, Validators.email], [this.validarEmail.bind(this)]],
        endereco: this.formBuilder.group({
          cep: [null, Validators.required],
          numero: [null, Validators.required],
          complemento: [null],
          rua: [null, Validators.required],
          bairro: [null, Validators.required],
          cidade: [null, Validators.required],
          estado: [null, Validators.required],
        }),
        cargo: [null],
        tecnologias: [null],
        newsletter: ['s'],
        termos: [false, Validators.pattern],
        // frameworks: this.buildFrameworks()
      });

      this.formulario.get('endereco.cep')?.statusChanges
        .pipe(
          distinctUntilChanged(),
          tap(value => console.log('Valor CEP: ', value))
          )
          .subscribe()
      
      
      // buildFrameworks() {
      //   const values = this.frameworks.map(v => new FormControl(false));
      //   return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
      // }



    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)

    //   endereco: new FormGroup({
    //     cep: new FormControl(null)
    //   })
    // });
  }


  onSubmit() {
    console.log(this.formulario);

    let valueSubmit = Object.assign({}, this.formulario.value)
    // valueSubmit = Object.assign(valueSubmit,{
    //   frameworks: valueSubmit.frameworks
    //     .map((v: any, i: string | number) => v ? this.frameworks[i] : null)
    //     .filter((v: null) => v !== null)
    //   });

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
        .pipe(map((res: any) => res))
        .subscribe(dados => {
          console.log(dados);
          // this.formulario.reset();
          // this.resetar();
        },
          (error: any) => alert('erro'));
    } else {
      console.log('formulario invalido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo)
      controle?.markAsDirty();
      if (controle instanceof FormGroup) {   
        this.verificaValidacoesForm(controle)
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo)?.valid && !this.formulario.get(campo)?.touched;
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep')?.value;

    if (cep != null && cep !== '') {
      this.consultaCepService.consultaCEP(cep)?.subscribe(dados => this.popularDadosForm(dados));
    }
  } 

  resetarDados() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        cep: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  popularDadosForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  setarCargo(){
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'};
    this.formulario.get('cargo')?.setValue(cargo);
  }

  compararCargos(obj1: any, obj2: any){
    return obj1 && obj2 ? (obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias(){
    this.formulario.get('tecnologias')?.setValue(['java','javascript','php'])
  }

  validarEmail(formControl: FormControl){
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExiste => emailExiste ? { emailInvalido: true} : null ))
  }

}

