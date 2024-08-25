import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router} from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  username = '';
  constructor(private router: Router) {
    const navegacion = this.router.getCurrentNavigation();
    const state = navegacion?.extras.state as {
      username: '';
    };
    this.username = state.username;
    
  }
  alertButtons = ['OK'];
  
  datos = {
    nombre : "",
    apellido : "",
    nivel : "",
    fecha : ""
  }


  ngOnInit() {
  }

}
