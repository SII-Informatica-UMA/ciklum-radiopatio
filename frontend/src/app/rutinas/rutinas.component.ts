import { Component, OnInit } from '@angular/core';
import { RutinaDTO } from './rutinas';
import { EjerciciosService } from '../services/ejercicios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RutinaFormularioComponent } from '../rutina-formulario/rutina-formulario.component';
import { RutinaDetallesComponent } from '../rutina-detalles/rutina-detalles.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rutinas',
  standalone: true,
  imports: [RutinaDetallesComponent, CommonModule],
  templateUrl: './rutinas.component.html',
  styleUrl: './rutinas.component.css'
})
export class RutinasComponent implements OnInit {
  idEntrenador = 20; // COMO NO TENEMOS USUARIO INICIADO IMPROVISO CON ESTO DE MOMENTO
  rutinas: RutinaDTO [] = [];
  rutinaElegida?: RutinaDTO;


  constructor(private ejercicioService: EjerciciosService, private modalService: NgbModal) { }
  // al cargar la pagina, ngOnInit cargara directamente la lista de ejercicios
  ngOnInit(): void {
    this.actualizarRutinas();
  }

  elegirRutina(rutina: RutinaDTO): void {
    this.rutinaElegida = rutina;
  }
  rutinaEditada(rutina: RutinaDTO): void {
    this.ejercicioService.putRutina(rutina.id,rutina);
    this.actualizarRutinas();
    this.rutinaElegida = this.rutinas.find(c => c.id == rutina.id);
  }
  eliminarRutina(id: number): void {
    this.ejercicioService.deleteRutina(id);
    this.actualizarRutinas();
    this.rutinaElegida = undefined;
  }
  aniadirRutina(): void {
    let ref = this.modalService.open(RutinaFormularioComponent);
    ref.componentInstance.accion = "Añadir";
    ref.componentInstance.ejercicio = {nombre : "", descripcion : "" , observaciones : "", tipo : "", musculosTrabajados : "", material : "",
    dificultad : "", multimedia : [], id : 0};
    ref.result.then((rutina: RutinaDTO) => {
      rutina.id = Math.max(...this.rutinas.map(c => c.id)) + 1;
      this.ejercicioService.postRutina(this.idEntrenador,rutina);
      this.actualizarRutinas();
    }, (reason) => {});
  }

  actualizarRutinas() : void {
    this.ejercicioService.getRutina(this.idEntrenador ).subscribe(rutinas => {this.rutinas = rutinas})
  }
}
