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
  constructor(private servicioo: ServiciossService,private router:Router){}  

  
  ruta = inject(ActivatedRoute);

id:any ;
materia:any;
descripcion:any;
horario:any;
imagen:any;
item:any;
editar (formulario:any){
  this.servicioo.putservicio(formulario.value).subscribe(()=>{this.router.navigate(['/servicio'])});
  
}
ngOnInit() {
this.ruta.params.subscribe(s=> {
  this.servicioo.getserviciobyid(s["idServicio"]).subscribe(servicio => {
    this.item = servicio;
    this.id = this.item.id;
    this.materia = this.item.materia;
    this.descripcion = this.item.descripcion;
    this.horario = this.item.horario;
    this.imagen=this.item.imagen;
  })
})

}
}
