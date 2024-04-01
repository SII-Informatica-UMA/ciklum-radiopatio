import { Component,Input, Output, EventEmitter } from '@angular/core';
import { Ejercicio } from '../ejercicio/ejercicio';
import { EjercicioService } from '../ejercicio/ejercicio.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
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


  eliminarEjercicio(): void {
    this.ejercicioEliminado.emit(this.ejercicio?.id);
  }
}
