import { Component } from '@angular/core';
import { ServiciossService } from '../../service/servicioss.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabla-servicios',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tabla-servicios.component.html',
  styleUrl: './tabla-servicios.component.css'
})
export class TablaServiciosComponent {

  constructor(private ser:ServiciossService){


  }
  servicios:any[]=[];
  ngOnInit() {
    this.ser.getServicios().subscribe(servicio=>{
      this.servicios=servicio;
  })  

  }
  eliminar(id:any){
    this.ser.deleteServicios(id).subscribe(()=>{
      window.location.reload();
    })
    
  }
  
  

}
