import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ejercicio } from '../ejercicio/ejercicio';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ejercicio-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio-formulario.component.html',
  styleUrl: './ejercicio-formulario.component.css'
})
export class EjercicioFormularioComponent {
  accion?: "Añadir" | "Editar";
  ejercicio: Ejercicio =  {id: 0, nombre: '', descripcion: '', materiales: '', enlace: '', carga: ''};
  constructor(public modal: NgbActiveModal) { }
  guardarEjercicio(): void {
    this.modal.close(this.ejercicio);
  }


}
