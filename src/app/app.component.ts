import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounce } from 'rxjs/operators';
@Component({
  selector: 'app-form',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  form: FormGroup = new FormGroup;
  constructor(){
    this.buildForm();
  }
  ngOnInit() {
  }

  private buildForm(): void{
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
    this.form.valueChanges.subscribe(value => {console.log})
  }
  save(event: Event){
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }
}
