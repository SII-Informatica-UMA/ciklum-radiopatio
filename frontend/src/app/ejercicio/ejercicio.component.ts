import { Component, OnInit } from '@angular/core';
import { Ejercicio } from './ejercicio';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EjercicioService } from './ejercicio.service';
import { CommonModule } from '@angular/common';
import { EjercicioDetallesComponent } from '../ejercicio-detalles/ejercicio-detalles.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ejercicio',
  standalone: true,
  imports: [CommonModule,EjercicioDetallesComponentRouterOutlet],
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.css',
})
export class EjercicioComponent implements OnInit {


  ejercicios: Ejercicio [] = [];
  ejercicioElegido?: Ejercicio;


  constructor(private ejercicioService: EjercicioService, private modalService: NgbModal, private router: Router) { }
  ngOnInit(): void {
    this.ejercicios = this.ejercicioService.getEjercicios();
  }

  elegirEjercicio(ejercicio: Ejercicio): void {
    this.ejercicioElegido = ejercicio;
  }
  ejercicioEditado(ejercicio: Ejercicio): void {
    this.ejercicioService.editarEjercicios(ejercicio);
    this.ejercicios = this.ejercicioService.getEjercicios();
    this.ejercicioElegido = this.ejercicios.find(c => c.id == ejercicio.id);
  }
  eliminarEjercicio(id: number): void {
    this.ejercicioService.eliminarEjercicios(id);
    this.ejercicios = this.ejercicioService.getEjercicios();
    this.ejercicioElegido = undefined;
  }
  /* constructor(private router: Router) { } */


  /* funcion para acceder a las cosas sin actualizar la pagina (SPA: single page application) */
  verEjercicioDetalles() {
    this.router.navigate(['/ejercicio-detalles']); // Navega a la ruta '/ejercicio-detalles' cuando se hace clic en el botón
  }
  
}
