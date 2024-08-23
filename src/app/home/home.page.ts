import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  usuario = {
    username : "",
    password : "",
  }
  mensaje = "";


  validar() {
    if (this.usuario.username.length >= 3) {
      if (this.usuario.password.length != 4){
        
      }else{
        console.log('No contiene el minimo de caracteres');
        this.mensaje = 'Contraseña no cumple';
      }
    
    }else{
      console.log('Usuario incorrecto');
      this.mensaje = 'Usuario no cumple';
    }
  }
}
