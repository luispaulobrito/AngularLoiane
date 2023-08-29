import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private http: HttpClientModule,
    private http: HttpClient
    ){}

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
    })


    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null)
    // });
  }

  onSubmit(){
    console.log(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(map((res: any) => res))
    .subscribe(dados => {
      console.log(dados);
      // this.formulario.reset();
      this.resetar();
    },
    (error:any) => alert('erro'));
  }
  
  resetar(){
    this.formulario.reset();
  }
}
