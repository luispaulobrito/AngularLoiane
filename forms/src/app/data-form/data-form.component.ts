import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent {

  formulario: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder){}

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

}
