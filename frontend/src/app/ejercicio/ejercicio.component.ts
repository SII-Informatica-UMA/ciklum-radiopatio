import { Component, OnInit } from '@angular/core';
import { EjercicioDTO } from './ejercicio';
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


  ejercicios: EjercicioDTO [] = [];
  ejercicioElegido?: EjercicioDTO;


  constructor(private ejercicioService: EjercicioService, private modalService: NgbModal) { }
  // al cargar la pagina, ngOnInit cargara directamente la lista de ejercicios
  ngOnInit(): void {
    this.ejercicios = this.ejercicioService.getEjercicios();
  }

  elegirEjercicio(ejercicio: EjercicioDTO): void {
    this.ejercicioElegido = ejercicio;
  }
  ejercicioEditado(ejercicio: EjercicioDTO): void {
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
    ref.componentInstance.ejercicio = {nombre : "", descripcion : "" , observaciones : "", tipo : "", musculosTrabajados : "", material : "",
    dificultad : "", multimedia : [], id : 0};
    ref.result.then((ejercicio: EjercicioDTO) => {
      this.ejercicioService.addEjercicios(ejercicio);
      this.ejercicios = this.ejercicioService.getEjercicios();
    }, (reason) => {});
  }
}
