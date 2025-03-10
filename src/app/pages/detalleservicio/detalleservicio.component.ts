import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciossService } from '../../service/servicioss.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-detalleservicio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalleservicio.component.html',
  styleUrl: './detalleservicio.component.css'
})
export class DetalleservicioComponent {
  constructor(private estudiantee: ServiciossService,private router:Router){}  

  
  ruta = inject(ActivatedRoute);

id:any ;
nombre:any;
apellido:any;
cedula:any;
telefono:any;
nivel:any;
imagen:any;
item:any;
editar (formulario:any){
  this.estudiantee.putestudiante(formulario.value).subscribe(()=>{this.router.navigate(['/estudiante'])});
  
}
ngOnInit() {
this.ruta.params.subscribe(e=> {
  this.estudiantee.getestudiantebyid(e["idEstudiante"]).subscribe(estudiante => {
    this.item = estudiante;
    this.id = this.item.id;
    this.nombre = this.item.nombre;
    this.apellido = this.item.apellido;
    this.cedula = this.item.cedula;
    this.telefono = this.item.telefono;
    this.nivel = this.item.nivel;
    this.imagen=this.item.imagen;
  })
})

}
}
