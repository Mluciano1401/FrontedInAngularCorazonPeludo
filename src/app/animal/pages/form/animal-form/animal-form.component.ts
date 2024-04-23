import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-animal-form',
  standalone: true,
  imports: [],
  templateUrl: './animal-form.component.html',
  styleUrl: './animal-form.component.css'
})
export class AnimalFormComponent implements OnInit {
  animalForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.animalForm = this.fb.group({
      id: [0],
      alias: ['', Validators.required],
      identificador: this.fb.group({
        id: [0],
        codigoBarra: ['', Validators.required],
        tipoIdentificador: ['', Validators.required]
      }),
      especie: ['', Validators.required],
      rasgosFisicos: this.fb.group({
        id: [0],
        color: ['', Validators.required],
        amputaciones: [false],
        tipoAmputacion: [null],
        tipoPiel: ['', Validators.required]
      }),
      sexo: ['', Validators.required],
      edad: [0, Validators.min(1)],
      altura: [0, Validators.min(1)],
      peso: [0, Validators.min(1)],
      estado: ['', Validators.required],
      fechaIngreso: [new Date()],
      origen: ['', Validators.required],
      foto: [''],
      fechaModificacion: [new Date()],
      status: [true]
    });
  }

  onSubmit() {
    if (this.animalForm.valid) {
      console.log(this.animalForm.value);
      // Submit animal data (replace with your logic)
    } else {
      console.error('Form is invalid');
    }
  }
}
