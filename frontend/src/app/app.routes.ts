import { Routes } from '@angular/router';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { EjercicioDetallesComponent } from './ejercicio-detalles/ejercicio-detalles.component';

/* array de objetos con las rutas del resto de componentes */
export const routes: Routes = [
    {path: 'ejercicio', component: EjercicioComponent},
    {path: 'rutina', component: RutinasComponent},
    {path: 'ejercicio-detalles', component: EjercicioDetallesComponent},
];
