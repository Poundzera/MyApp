import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  user = {
    username : "",
    password : "",
  }
  mensaje = "";


  validar() {
    if (this.user.username.length >= 3) {
      if (this.user.password.length == 4){
        let navigationExtras: NavigationExtras = {
          state: {
            username: this.user.username,
            password: this.user.password,
          },
        };
        this.router.navigate (['/inicio'],navigationExtras);
      }else{
        console.log('Contraseña incorrecta');
        this.mensaje = 'Contraseña no cumple';
      }
    
    }else{
      console.log('Usuario incorrecto');
      this.mensaje = 'Usuario no cumple';
    }
  }
}
