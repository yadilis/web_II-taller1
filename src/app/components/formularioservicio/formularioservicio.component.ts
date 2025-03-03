import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ServiciossService } from "../../service/servicioss.service";


@Component({
  selector: 'app-formularioservicio',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './formularioservicio.component.html',
  styleUrl: './formularioservicio.component.css'
})
export class FormularioservicioComponent {
  constructor(private servicioo : ServiciossService ) { }
  materia:any;
  descripcion:any;
  horario:any;
  imagen:any;
  
  guardarServicio(formulario:any){
    this.servicioo.postServicios(formulario.value).subscribe(()=>{window.location.reload()});
    
  }

  seleccionarImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Imagen seleccionada:', file.name);
    }
  }
}


