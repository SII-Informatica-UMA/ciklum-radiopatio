import { Component,Input, Output, EventEmitter } from '@angular/core';
import { EjercicioDTO } from '../ejercicio/ejercicio';
import { BackendService } from '../services/backend.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { EjercicioFormularioComponent } from '../ejercicio-formulario/ejercicio-formulario.component';

@Component({
  selector: 'app-ejercicio-detalles',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './ejercicio-detalles.component.html',
  styleUrl: './ejercicio-detalles.component.css'
})
export class EjercicioDetallesComponent {
  @Input() ejercicio?: EjercicioDTO;
  @Output() ejercicioEditado = new EventEmitter<EjercicioDTO>();
  @Output() ejercicioEliminado = new EventEmitter<number>();

  constructor(private backendService: BackendService, private modalService: NgbModal,  ) { }

  editarEjercicio(): void {
    let ref = this.modalService.open(EjercicioFormularioComponent);
    ref.componentInstance.accion = "Editar";
    ref.componentInstance.ejercicio = {...this.ejercicio};
    ref.result.then((ejercicio: EjercicioDTO) => {
      this.ejercicioEditado.emit(ejercicio);
    }, (reason) => {});
  }

  eliminarEjercicio(): void {
    this.ejercicioEliminado.emit(this.ejercicio?.id);
  }
  
  

}
