import { Component } from '@angular/core';
import { FormularioservicioComponent } from '../../components/formularioservicio/formularioservicio.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormularioservicioComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

}
