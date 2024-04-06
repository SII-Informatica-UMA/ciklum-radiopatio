import { Injectable } from '@angular/core';
import { EjercicioDTO } from './ejercicio';


@Injectable({
  providedIn: 'root'
})

export class EjercicioService {
  private ejercicios: EjercicioDTO []=[
    {nombre : "Sentadillas", descripcion : "Bajar el culo" , observaciones : "Observacion inteligente", tipo : "sentarse", musculosTrabajados : "Gluteos", material : "Ninguno",
    dificultad : "3", multimedia : [], id : 0},
    {nombre : "Plancha", descripcion : "Planchar la ropa" , observaciones : "Cuidado que quema", tipo : "Manual", musculosTrabajados : "Brazo", material : "Plancha, tabla de planchar",
    dificultad : "1", multimedia : [], id : 1},
    {nombre : "Cabezazo", descripcion : "Meterle un cabezazo" , observaciones : "CABEZAZO PUM", tipo : "Dolor de cabeza", musculosTrabajados : "cabeza", material : "casco (opcional) ",
    dificultad : "8", multimedia : [], id : 2}
   ];
   
  constructor() { }

  getEjercicios(): EjercicioDTO [] {
    return this.ejercicios;
  }

  addEjercicios(ejercicio: EjercicioDTO) {
    ejercicio.id = Math.max(...this.ejercicios.map(c => c.id)) + 1;
    this.ejercicios.push(ejercicio);
  }

  editarEjercicios(ejercicio: EjercicioDTO) {
    let indice = this.ejercicios.findIndex(c => c.id == ejercicio.id);
    this.ejercicios[indice] = ejercicio;
  }

  eliminarEjercicios(id: number) {
    let indice = this.ejercicios.findIndex(c => c.id == id);
    this.ejercicios.splice(indice, 1);
  }
}
