import { Component, OnInit } from '@angular/core';
import { Ejercicio } from './ejercicio';
import { Router, RouterOutlet } from '@angular/router';
import { EjercicioDetallesComponent } from '../ejercicio-detalles/ejercicio-detalles.component';

@Component({
  selector: 'app-ejercicio',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.css',
})
export class EjercicioComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }

  /* funcion para acceder a las cosas sin actualizar la pagina (SPA: single page application) */
  verEjercicioDetalles() {
    this.router.navigate(['/ejercicio-detalles']); // Navega a la ruta '/ejercicio-detalles' cuando se hace clic en el botón
  }
  
}
