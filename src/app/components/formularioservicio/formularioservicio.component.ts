import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";  // Asegúrate de importar Router
import { ServiciossService } from "../../service/servicioss.service";

@Component({
  selector: 'app-formularioservicio',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './formularioservicio.component.html',
  styleUrls: ['./formularioservicio.component.css']  // Corrige 'styleUrl' por 'styleUrls'
})
export class FormularioservicioComponent {
  constructor(
    private servicio: ServiciossService,
    private route:Router
  ) {}

  nombre: any;
  apellido: any;
  cedula: any;
  telefono: any;
  nivel: any;
  imagen: any;

  guardarEstudiante(formulario: any) {
    this.servicio.postEstudiantes(formulario.value).subscribe(() => {
      window.location.reload();
    });
  }

  seleccionarImagen(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Imagen seleccionada:', file.name);
    }
  }

  // Método logout
  logout(){
    localStorage.setItem("login","false")
    this.route.navigate(['login'])
  }
}
