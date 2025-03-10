import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {

 
  email: any;
  password: any;

  constructor(private servicio: LoginService, private route: Router) {}

  login(formulario: any) {
    this.servicio.postLogin(formulario.value).subscribe(
      acceso => {
        let token = acceso.accessToken;
        let role = acceso.role; 

        if (token != '') {
          localStorage.setItem('login', 'true'); 

        
          if (role === 'estudiante') {
            this.route.navigate(['tutorias']); 
          } else if (role === 'tutor') {
            this.route.navigate(['tutor']);
          }
        }
      },
    
    );
  }
}
