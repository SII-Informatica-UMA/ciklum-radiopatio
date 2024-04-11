import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RutinaDTO } from '../rutinas/rutinas';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FragmentoRutinaDTO } from '../rutinas/fragmentoRutina';
import { EjercicioDTO } from '../ejercicio/ejercicio';
import { EjerciciosService } from '../services/ejercicios.service';

@Component({
  selector: 'app-rutina-formulario',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './rutina-formulario.component.html',
  styleUrl: './rutina-formulario.component.css'
})
export class RutinaFormularioComponent {
  idEntrenador = 20;
  accion?: "Añadir" | "Editar";
  rutina: RutinaDTO =  {nombre : "", descripcion : "" , observaciones : "", ejercicios : [], id : 0};
  ejerciciosCreados? : EjercicioDTO[];
  ejercicioElegido?: FragmentoRutinaDTO;
  nuevosEjercicios? : FragmentoRutinaDTO[];
  constructor(private ejercicioService: EjerciciosService, public modal: NgbActiveModal) { }
  ngOnInit(): void {
    this.nuevosEjercicios = [];
    this.rutina.ejercicios?.forEach(val => this.nuevosEjercicios?.push(this.deepClone(val)));
    this.ejercicioService.getEjercicios(this.idEntrenador).subscribe(ejercicios => this.ejerciciosCreados = ejercicios);
    
  }

  deepClone(frag : FragmentoRutinaDTO) : FragmentoRutinaDTO{
    let fragNuevo : FragmentoRutinaDTO = {series : 0, repeticiones : 0, duracionMinutos : 0, ejercicio : this.ejerciciosCreados?.at(0)};
    fragNuevo.duracionMinutos = frag.duracionMinutos;
    fragNuevo.ejercicio = frag.ejercicio;
    fragNuevo.series = frag.series;
    fragNuevo.repeticiones = frag.repeticiones;
    return fragNuevo;
  }

  guardarRutina(): void {
    this.rutina.ejercicios = Object.assign([], this.nuevosEjercicios);
    this.modal.close(this.rutina)
  }
  

  elegirEjercicio(ejercicio : FragmentoRutinaDTO){
    if(this.ejercicioElegido == ejercicio){
      this.ejercicioElegido = undefined;
    }else{
      this.ejercicioElegido = ejercicio;
    }
  }

  aniadirEjercicio(){ //COMPROBAR SI SE BORRA EJERCICIO SI CAMBIA EN RUTINAS
    let fragRutina : FragmentoRutinaDTO = {series : 0, repeticiones : 0, duracionMinutos : 0, ejercicio : this.ejerciciosCreados?.at(0)} // COPIA LA DIRECCION  AL EJERCICIO NO EL EJERCICIO
    this.nuevosEjercicios?.push(fragRutina);
  }

  cambiarEjercicio(ejercicioNuevo : EjercicioDTO, fragmentoActual : FragmentoRutinaDTO){
    let indice = this.nuevosEjercicios!.findIndex(c => c == fragmentoActual);
    this.nuevosEjercicios![indice].ejercicio = ejercicioNuevo;
  }

  eliminarEjercicio(){
    if(this.ejercicioElegido){
      let indice = this.nuevosEjercicios!.findIndex(c => c == this.ejercicioElegido);
      this.nuevosEjercicios?.splice(indice,1);
      this.ejercicioElegido = undefined;
    }
  }
}
