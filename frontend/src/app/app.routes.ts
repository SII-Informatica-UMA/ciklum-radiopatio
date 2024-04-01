import { Routes } from '@angular/router';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { EjercicioDetallesComponent } from './ejercicio-detalles/ejercicio-detalles.component';
import { EjercicioEditarComponent } from './ejercicio-editar/ejercicio-editar.component';

/* array de objetos con las rutas del resto de componentes */
export const routes: Routes = [
    {path: 'ejercicio', component: EjercicioComponent},
    {path: 'rutina', component: RutinasComponent},
    {path: 'ejercicio-detalles', component: EjercicioDetallesComponent},
    {path: 'ejercicio-editar', component: EjercicioEditarComponent},
];
