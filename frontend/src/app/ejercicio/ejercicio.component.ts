import { Component, OnInit } from '@angular/core';
import { Ejercicio } from './ejercicio';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EjercicioService } from './ejercicio.service';
import { CommonModule } from '@angular/common';
import { EjercicioDetallesComponent } from '../ejercicio-detalles/ejercicio-detalles.component';
import { EjercicioFormularioComponent } from '../ejercicio-formulario/ejercicio-formulario.component';

@Component({
  selector: 'app-ejercicio',
  standalone: true,
  imports: [CommonModule,EjercicioDetallesComponent],
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.css',
})
export class EjercicioComponent implements OnInit {


  ejercicios: Ejercicio [] = [];
  ejercicioElegido?: Ejercicio;


  constructor(private ejercicioService: EjercicioService, private modalService: NgbModal) { }
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
  aniadirEjercicio(): void {
    let ref = this.modalService.open(EjercicioFormularioComponent);
    ref.componentInstance.accion = "Añadir";
    ref.componentInstance.ejercicio = {id: 0, nombre: '', descripcion: '', materiales: '', enlace: '', carga:''};
    ref.result.then((ejercicio: Ejercicio) => {
      this.ejercicioService.addEjercicios(ejercicio);
      this.ejercicios = this.ejercicioService.getEjercicios();
    }, (reason) => {});
  }
}
