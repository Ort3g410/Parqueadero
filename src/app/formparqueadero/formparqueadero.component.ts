import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-formparqueadero',
  templateUrl: './formparqueadero.component.html',
  styleUrls: ['./formparqueadero.component.css']
})
export class FormparqueaderoComponent {
  formparqueadero = this.fb.group({
    Nombreparqueadero: [null, Validators.required],
    Direccion: [null, Validators.required],
    Telefono: ["", Validators.required],
    Cupos: [null, Validators.required],
    
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

 

  constructor(private fb: FormBuilder) {}

  
  onSubmit(): void {
    Swal.fire({
      
      icon: 'success',
      title: 'Tu parquedero quedo registrado',
      showConfirmButton: false,
      timer: 1500
    })
  
  }
}
