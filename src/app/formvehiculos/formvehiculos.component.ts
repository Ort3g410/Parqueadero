import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formvehiculos',
  templateUrl: './formvehiculos.component.html',
  styleUrls: ['./formvehiculos.component.css']
})
export class FormvehiculosComponent {
  formvehiculo = this.fb.group({
    Nombre: ["", Validators.required],
    Apellido: [null, Validators.required],
    Email: [null, Validators.required],
    Vehiculo: [null, Validators.required],
    Placa: [null, Validators.required],
    
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

 

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Vehiculo agregado',
      'Click en el boton',
      'success'
    )
  }

}
