import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RutinaDTO } from '../rutinas/rutinas';
import { BackendService } from '../services/backend.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RutinaFormularioComponent } from '../rutina-formulario/rutina-formulario.component';

@Component({
  selector: 'app-rutina-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rutina-detalles.component.html',
  styleUrl: './rutina-detalles.component.css'
})
export class RutinaDetallesComponent {
  @Input() rutina?: RutinaDTO;
  @Output() rutinaEditada = new EventEmitter<RutinaDTO>();
  @Output() rutinaEliminada = new EventEmitter<number>();

  constructor(private backendService: BackendService, private modalService: NgbModal,  ) { }

  editarRutina(): void {
    let ref = this.modalService.open(RutinaFormularioComponent);
    ref.componentInstance.accion = "Editar";
    ref.componentInstance.rutina = {...this.rutina};
    ref.result.then((rutina: RutinaDTO) => {
      this.rutinaEditada.emit(rutina);
    }, (reason) => {});
  }

  eliminarRutina(): void {
    this.rutinaEliminada.emit(this.rutina?.id);
  }
}
