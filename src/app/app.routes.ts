import { Routes } from '@angular/router';
import { CentroBienestarComponent } from './Components/centro-bienestar/centro-bienestar.component';
import { PsicologoServiciosComponent } from './Components/psicologo-servicios/psicologo-servicios.component';
import { PsicologoContactoComponent } from './Components/psicologo-contacto/psicologo-contacto.component';
import { PsicologoTalleresComponent } from './Components/psicologo-talleres/psicologo-talleres.component';

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
    path: 'talleres', 
    component: PsicologoTalleresComponent
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
