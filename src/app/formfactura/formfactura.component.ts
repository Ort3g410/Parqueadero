import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formfactura',
  templateUrl: './formfactura.component.html',
  styleUrls: ['./formfactura.component.css']
})
export class FormfacturaComponent {
  formfactura = this.fb.group({
    
    Numerodefactura: [null, Validators.required],
    Placa: [null, Validators.required],
    Tipo: [null, Validators.required],
    Numerofactura: [null, Validators.compose([
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
      title: 'Factura',
      showConfirmButton: false,
      timer: 1500
    })
  }
}