import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import {generos} from '../../data/generos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  generos: any[]= generos;
  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      ap: new FormControl('', [Validators.required]),
      am: new FormControl('', [Validators.required]),
      fnac: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      nacionalidad: new FormControl('', [Validators.required]),
      club: new FormControl('', [Validators.required]),
      rfc: new FormControl('', [Validators.required]),
      ocupacion: new FormControl('', [Validators.required]),
    });
  }

  private buildForm(): void{
    
    this.form.valueChanges.subscribe(value => {console.log})
  }

  save(event: Event){
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }
}
