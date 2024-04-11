import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EjercicioDTO } from '../ejercicio/ejercicio';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-ejercicio-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicio-formulario.component.html',
  styleUrl: './ejercicio-formulario.component.css'
})
export class EjercicioFormularioComponent {
  enlacesMultimedia: string = '';
  accion?: "Añadir" | "Editar";
  ejercicio: EjercicioDTO =  {nombre : "", descripcion : "" , observaciones : "", tipo : "", musculosTrabajados : "", material : "",
    dificultad : "", multimedia : [], id : 0
  };
  constructor(public modal: NgbActiveModal) { }
  guardarEjercicio(): void {
    if (this.ejercicio && this.ejercicio.multimedia![1]) {
      if (this.validarUrl(this.ejercicio.multimedia![1])) {
        this.modal.close(this.ejercicio);
      }
    }else if(this.ejercicio){
      this.modal.close(this.ejercicio);
    }
    

    
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
      reader.onload = (e: any) => {
        this.ejercicio.multimedia![0] = e.target.result;
      };
    reader.readAsDataURL(file);
  }
  validarUrl( url: string): boolean {
    if (url.trim() === '') {
      return true;
    }
    const httpRegex: RegExp = /^(http|https):\/\//;

    if (!httpRegex.test(url)) {
          alert('La URL debe comenzar con "http://" o "https://".'); // Muestra la alerta si la URL no es válida
          return false;
    }
    return true;
  }

  procesarEnlacesMultimedia(event: any) {
    const enlaces = event.target.value.split(',').map((enlace: string) => enlace.trim());
    this.ejercicio.multimedia = enlaces.filter((enlace: string) => enlace !== ''); //enlace vacio
    console.log(this.ejercicio.multimedia);
  }

  
}
