import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicioComponent } from './pages/servicio/servicio.component';
import { DetalleservicioComponent } from './pages/detalleservicio/detalleservicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },
    {
        path:'suscripcion',
        component:SuscripcionComponent
    } ,

    {
        path:'contactos',
        component:ContactosComponent
    } ,
    {
        path:'nosotros',
        component: NosotrosComponent
    },
    
    {
        path:'servicio',
        component:ServicioComponent
    }
    ,
    {
        path:'servicios/:idServicio',
        component:DetalleservicioComponent
    },
    {
        path:'**',
        component:Error404Component
    }
];
