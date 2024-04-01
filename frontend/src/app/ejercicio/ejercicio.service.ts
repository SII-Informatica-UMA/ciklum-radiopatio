import { Injectable } from '@angular/core';
import { Ejercicio } from './ejercicio';


@Injectable({
  providedIn: 'root'
})

export class EjercicioService {
  private ejercicios: Ejercicio []=[
      {id: 1, nombre: 'Sentadillas', descripcion: 'baja y subee sube y baja', materiales: 'la fe', enlace: '@formato_enlace', carga: 'fuerza'},
      {id: 2, nombre: 'Flexiones', descripcion: 'baja y subee sube y baja', materiales: 'un santi', enlace: '@formato_enlace', carga: 'fuerzaQuenoTenmos'},
      {id: 3, nombre: 'Dominadas', descripcion: 'ejercicio imposible', materiales: 'una barra', enlace: '@formato_enlace', carga: 'fuerza'},
    ];
  constructor() { }

  getEjercicios(): Ejercicio [] {
    return this.ejercicios;
  }

  addEjercicios(ejercicio: Ejercicio) {
    ejercicio.id = Math.max(...this.ejercicios.map(c => c.id)) + 1;
    this.ejercicios.push(ejercicio);
  }

  editarEjercicios(ejercicio: Ejercicio) {
    let indice = this.ejercicios.findIndex(c => c.id == ejercicio.id);
    this.ejercicios[indice] = ejercicio;
  }

  eliminarEjercicios(id: number) {
    let indice = this.ejercicios.findIndex(c => c.id == id);
    this.ejercicios.splice(indice, 1);
  }
}
