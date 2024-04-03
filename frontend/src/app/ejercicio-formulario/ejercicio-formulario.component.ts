import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ejercicio } from '../ejercicio/ejercicio';
import { FormsModule } from '@angular/forms';
import { Img } from '../ejercicio/imagen';
@Component({
  selector: 'app-ejercicio-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio-formulario.component.html',
  styleUrl: './ejercicio-formulario.component.css'
})
export class EjercicioFormularioComponent {

  accion?: "Añadir" | "Editar";
  ejercicio: Ejercicio =  {id: 0, nombre: '', descripcion: '', materiales: '', video: '', carga: '',imagen:null};
  constructor(public modal: NgbActiveModal) { }
  guardarEjercicio(): void {
    if(!this.validarUrl(this.ejercicio.video)){
      this.modal.close(this.ejercicio);
    }
    
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
      reader.onload = (e: any) => {
        this.ejercicio.imagen = { src: e.target.result };
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
