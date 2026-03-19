import { Routes } from '@angular/router';
import { CentroBienestarComponent } from './Components/centro-bienestar/centro-bienestar.component';
import { PsicologoServiciosComponent } from './Components/psicologo-servicios/psicologo-servicios.component';
import { PsicologoContactoComponent } from './Components/psicologo-contacto/psicologo-contacto.component';

export const routes: Routes = [
  {
    path: '', 
    component: CentroBienestarComponent
  },
  {
    path: 'servicios', 
    component: PsicologoServiciosComponent
  },
  {
    path: 'contacto', 
    component: PsicologoContactoComponent
  },
  {
    path: '**', 
    redirectTo: ''
  }
];
