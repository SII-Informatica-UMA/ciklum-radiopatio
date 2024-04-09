import { Component, OnInit } from '@angular/core';
import { EjercicioDTO } from './ejercicio';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EjerciciosService } from '../services/ejercicios.service';
import { CommonModule } from '@angular/common';
import { EjercicioDetallesComponent } from '../ejercicio-detalles/ejercicio-detalles.component';
import { EjercicioFormularioComponent } from '../ejercicio-formulario/ejercicio-formulario.component';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-ejercicio',
  standalone: true,
  imports: [CommonModule,EjercicioDetallesComponent],
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.css',
})


export class EjercicioComponent implements OnInit {

  idEntrenador = 20; // COMO NO TENEMOS USUARIO INICIADO IMPROVISO CON ESTO DE MOMENTO
  ejercicios: EjercicioDTO [] = [];
  ejercicioElegido?: EjercicioDTO;


  constructor(private ejercicioService: EjerciciosService, private modalService: NgbModal) { }
  // al cargar la pagina, ngOnInit cargara directamente la lista de ejercicios
  ngOnInit(): void {
    this.actualizarEjercicios();
  }

  elegirEjercicio(ejercicio: EjercicioDTO): void {
    this.ejercicioElegido = ejercicio;
  }
  ejercicioEditado(ejercicio: EjercicioDTO): void {
    this.ejercicioService.putEjercicio(ejercicio.id,ejercicio).subscribe(ejercicio => this.actualizarEjercicios());
    this.ejercicioElegido = this.ejercicios.find(c => c.id == ejercicio.id);
  }
  eliminarEjercicio(id: number): void {
    this.ejercicioService.deleteEjercicio(id).subscribe(ejercicio => this.actualizarEjercicios());
    this.ejercicioElegido = undefined;
  }
  aniadirEjercicio(): void {
    let ref = this.modalService.open(EjercicioFormularioComponent);
    ref.componentInstance.accion = "Añadir";
    ref.componentInstance.ejercicio = {nombre : "", descripcion : "" , observaciones : "", tipo : "", musculosTrabajados : "", material : "",
    dificultad : "", multimedia : [], id : 0};
    ref.result.then((ejercicio: EjercicioDTO) => {
      ejercicio.id = Math.max(...this.ejercicios.map(c => c.id)) + 1;
      this.ejercicioService.postEjercicio(this.idEntrenador,ejercicio).subscribe(ejercicio => this.actualizarEjercicios());
    }, (reason) => {});
  }

  actualizarEjercicios() : void {
    this.ejercicioService.getEjercicios(this.idEntrenador ).subscribe(ejercicios => {this.ejercicios = ejercicios})
  }
}
