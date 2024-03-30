import { Component } from '@angular/core';
import { Ejercicio } from './ejercicio';

@Component({
  selector: 'app-ejercicio',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.css',
})
export class EjercicioComponent {
  ejercicios: Ejercicio [] = [];
  ejercicioElegido?: Ejercicio;

  elegirEjercicio(ejercicio: Ejercicio): void {
    this.ejercicioElegido = ejercicio;
  }
}
