import { Component } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutorias',
  standalone: true,
  imports: [],
  templateUrl: './tutorias.component.html',
  styleUrl: './tutorias.component.css'
})
export class TutoriasComponent {
    
  constructor(private servicio:LoginService,private route:Router) {
        
  }
logout(){
  localStorage.setItem("login","false")
  this.route.navigate(['login'])
}



}
