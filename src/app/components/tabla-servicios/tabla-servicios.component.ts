import { Component } from '@angular/core';
import { ServiciossService } from '../../service/servicioss.service';
import { Router, RouterModule } from '@angular/router'; // Asegúrate de importar Router

@Component({
  selector: 'app-tabla-servicios',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tabla-servicios.component.html',
  styleUrls: ['./tabla-servicios.component.css'] // Corregido el error en el nombre
})
export class TablaServiciosComponent {
  
  constructor(private ser:ServiciossService, private route:Router){


  }
  estudiantes:any[]=[];
  ngOnInit() {
    this.ser.getEstudiantes().subscribe(estudiante=>{
      this.estudiantes=estudiante;
  })  

  }
  eliminar(id:any){
    this.ser.deleteEstudiantes(id).subscribe(()=>{
      window.location.reload();
    })
    
  }
  logout(){
    localStorage.setItem("login","false")
    this.route.navigate(['login'])
  }
}