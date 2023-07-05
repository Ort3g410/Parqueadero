import { Component } from '@angular/core';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2'
import  { Title} from '@angular/platform-browser';
import { LoginService } from 'src/app/Services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/*@Injectable({
  providedIn: 'root'
})*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  
    constructor (public loginservice : LoginService) {


    }
    usu = "";
    pass = "";

    loginform = new FormGroup ({
    username: new FormControl ('',Validators.required),
    password: new FormControl ('',Validators.required)
    });


    async onSubmit (){
      this.usu = this.loginform.controls ["username"].value;
      this.pass = this.loginform.controls["password"].value;
        if (this.usu === "u" && this.pass === "1"){
    
          Swal.fire(
            'Muy Bien',
            'Se ha logueado Correctamente',
            "success"

          )
          localStorage.setItem('login','logout');
          this.loginservice.login.next("login");
        }
        else
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos de logueo fallido',
          footer: 'Intente con:  usuario: usuario y clave :1234'
        })
    
}

}


