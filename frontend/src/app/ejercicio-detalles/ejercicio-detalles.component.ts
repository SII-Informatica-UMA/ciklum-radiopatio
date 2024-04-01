import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Ejercicio } from '../ejercicio/ejercicio';
import { EjercicioService } from '../ejercicio/ejercicio.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EjercicioFormularioComponent } from '../ejercicio-formulario/ejercicio-formulario.component';
@Component({
  selector: 'app-ejercicio-detalles',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio-detalles.component.html',
  styleUrl: './ejercicio-detalles.component.css'
})
export class EjercicioDetallesComponent {
  @Input() ejercicio?: Ejercicio;
  @Output() ejercicioEditado = new EventEmitter<Ejercicio>();
  @Output() ejercicioEliminado = new EventEmitter<number>();

  constructor(private ejerciciosService: EjercicioService, private modalService: NgbModal) { }

  editarEjercicio(): void {
    let ref = this.modalService.open(EjercicioFormularioComponent);
    ref.componentInstance.accion = "Editar";
    ref.componentInstance.ejercicio = {...this.ejercicio};
    ref.result.then((ejercicio: Ejercicio) => {
      this.ejercicioEditado.emit(ejercicio);
    }, (reason) => {});
  }

  eliminarEjercicio(): void {
    this.ejercicioEliminado.emit(this.ejercicio?.id);
  }

}
