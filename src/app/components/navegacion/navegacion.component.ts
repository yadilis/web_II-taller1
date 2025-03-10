import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {
 
    // Función que verifica si el usuario está autenticado
    autentication(): boolean {
      if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem('login') === 'true';
      }
      return false;
    }
    
  }
  