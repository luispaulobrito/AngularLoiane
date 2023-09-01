import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { DropdownService } from './../shared/services/dropdown.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { EstadoBr } from '../shared/model/estado-br.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent {

  formulario!: FormGroup;
  estados: EstadoBr[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private consultaCepService: ConsultaCepService
  ) { }

  ngOnInit(): void {

    this.dropdownService.getEstadosBr()
      .subscribe(dados => {
        this.estados = dados
        console.log(dados);
        
      });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    })


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

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
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
}
