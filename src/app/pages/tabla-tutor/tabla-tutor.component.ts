import { Component } from '@angular/core';
import { ServiciossService } from '../../service/servicioss.service';
import { RouterModule } from '@angular/router';
import { TablaServiciosComponent } from "../../components/tabla-servicios/tabla-servicios.component";

@Component({
  selector: 'app-tabla-tutor',
  standalone: true,
  imports: [RouterModule, TablaServiciosComponent],
  templateUrl: './tabla-tutor.component.html',
  styleUrl: './tabla-tutor.component.css'
})
export class TablaTutorComponent {


    }
    
    
  


