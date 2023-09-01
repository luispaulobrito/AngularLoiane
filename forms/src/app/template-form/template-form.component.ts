import { ConsultaCepService } from './../shared/services/consulta-cep.service';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  constructor(
    private http: HttpClient,
    private consultaCepService: ConsultaCepService
    ) { }

  usuario: any = {
    nome: null,
    email: null
  }

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssCampo(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: any, form: any) {

    cep = cep.replace(/\D/g, '');

    if (cep != null && cep !== '') {
      this.consultaCepService.consultaCEP(cep)?.subscribe(dados => this.popularDadosForm(dados, form));
    }
  }

  popularDadosForm(dados: any, form: any) {
    form.form.patchValue({
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

  resetarDados(form: any){
    form.form.patchValue({
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

  onSubmit(form: any) {
    console.log(form.form.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .pipe(map((res: any) => res))
    .subscribe(dados => console.log(dados));
  }
}
