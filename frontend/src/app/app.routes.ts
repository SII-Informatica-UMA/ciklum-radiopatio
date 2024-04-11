import { Routes } from '@angular/router';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { EjercicioDetallesComponent } from './ejercicio-detalles/ejercicio-detalles.component';
import { EjercicioFormularioComponent } from './ejercicio-formulario/ejercicio-formulario.component';
import { RutinaDetallesComponent } from './rutina-detalles/rutina-detalles.component';
import { RutinaFormularioComponent } from './rutina-formulario/rutina-formulario.component';

/* array de objetos con las rutas del resto de componentes */
export const routes: Routes = [
    {path: 'ejercicio', component: EjercicioComponent},
    {path: 'rutina', component: RutinasComponent},
    {path: 'ejercicio-detalles', component: EjercicioDetallesComponent},
    {path: 'ejercicio-formulario', component: EjercicioFormularioComponent},
    {path: 'rutina-detalles', component: RutinaDetallesComponent},
    {path: 'rutina-formulario', component: RutinaFormularioComponent},
];
