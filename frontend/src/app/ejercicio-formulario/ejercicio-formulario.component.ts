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
  alerta: boolean=false;
  enlacesMultimedia: string = '';
  accion?: "Añadir" | "Editar";
  ejercicio: EjercicioDTO =  {nombre : "", descripcion : "" , observaciones : "", tipo : "", musculosTrabajados : "", material : "",
    dificultad : "", multimedia : [], id : 0
  };
  constructor(public modal: NgbActiveModal) { }
  guardarEjercicio(): void {
    if (this.ejercicio && this.ejercicio.multimedia) {
      this.alerta=false;
      const enlacesValidos = this.ejercicio.multimedia.filter((enlace: string) => !this.validarUrl(enlace));
      if (enlacesValidos.length === this.ejercicio.multimedia.length) {
        this.modal.close(this.ejercicio);
      }
    }
    

    
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
      if (this.alerta==false){
        this.alerta=true;
        alert('La URL debe comenzar con "http://" o "https://".'); // Muestra la alerta si la URL no es válida
              return true;
      }
      
    }
    return false;
  }

  procesarEnlacesMultimedia(event: any) {
    const enlaces = event.target.value.split(',').map((enlace: string) => enlace.trim());
    this.ejercicio.multimedia = enlaces.filter((enlace: string) => enlace !== ''); //enlace vacio
    console.log(this.ejercicio.multimedia);
  }

  
}
