import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RutinaDTO } from '../rutinas/rutinas';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rutina-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './rutina-formulario.component.html',
  styleUrl: './rutina-formulario.component.css'
})
export class RutinaFormularioComponent {
  
  accion?: "Añadir" | "Editar";
  rutina: RutinaDTO =  {nombre : "", descripcion : "" , observaciones : "", ejercicios : [], id : 0};
  constructor(public modal: NgbActiveModal) { }
  guardarRutina(): void {
    /*if(!this.validarUrl(this.ejercicio.video)){
      this.modal.close(this.ejercicio);
    }*/
    this.modal.close(this.rutina)
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
      reader.onload = (e: any) => {
        /*this.ejercicio.imagen = { src: e.target.result };*/
      };
    reader.readAsDataURL(file);
  }
  validarUrl( url: string): boolean {
    if (url.trim() === '') {
      return false;
    }
    const httpRegex: RegExp = /^(http|https):\/\//;

    if (!httpRegex.test(url)) {
      alert('La URL debe comenzar con "http://" o "https://".'); // Muestra la alerta si la URL no es válida
      return true;
    }
    return false;
  }
}
