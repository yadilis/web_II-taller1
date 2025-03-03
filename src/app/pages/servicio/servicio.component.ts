import { Component } from '@angular/core';
import { TablaServiciosComponent } from '../../components/tabla-servicios/tabla-servicios.component';
import { FormularioservicioComponent } from '../../components/formularioservicio/formularioservicio.component';


@Component({
  selector: 'app-servicio',
  standalone: true,
  imports: [FormularioservicioComponent, TablaServiciosComponent],
  templateUrl: './servicio.component.html',
  styleUrl: './servicio.component.css'
})
export class ServicioComponent {

}
