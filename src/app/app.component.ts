import { Component, OnInit } from '@angular/core';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Parqueadero';
  constructor (public loginservice : LoginService){
  
  }
login : string  = "login";
  ngOnInit(): void {
  if (localStorage.getItem('login') === null){    
    localStorage.setItem('login','login');

  }
    if(this.loginservice.login.value === 'login'){
  this.loginservice.login.next ('login');
   } else {
    this.loginservice.login.next('login');
}
  this.loginservice.login.subscribe(value => {
  this.login = value;
  })

  }




















}
