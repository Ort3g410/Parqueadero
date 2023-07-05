import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formreportes',
  templateUrl: './formreportes.component.html',
  styleUrls: ['./formreportes.component.css']
})
export class FormreportesComponent {
  formresportes = this.fb.group({
    
    Numeroderesporte: [null, Validators.required],
    Placa: [null, Validators.required],
    Tipo: [null, Validators.required],
    Numeroreporte: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  Tipo = [
    {name: 'Moto', abbreviation: 'AL'},
    {name: 'Carro', abbreviation: 'AK'},
    {name: 'Bicicleta', abbreviation: 'AS'},
    {name: 'Patineta', abbreviation: 'AZ'},
    
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire({
      
      icon: 'success',
      title: 'Reporte',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
