import { Injectable } from '@angular/core';
import { EjercicioDTO } from '../ejercicio/ejercicio';
import { Observable, of } from 'rxjs';
import { RutinaDTO } from '../rutinas/rutinas';


@Injectable({
  providedIn: 'root'
})

export class BackendFakeService {
  private ejercicios: EjercicioDTO []=[
    {nombre : "Sentadillas", descripcion : "Bajar el culo" , observaciones : "Observacion inteligente", tipo : "sentarse", musculosTrabajados : "Gluteos", material : "Ninguno",
    dificultad : "3", multimedia : [], id : 0},
    {nombre : "Plancha", descripcion : "Planchar la ropa" , observaciones : "Cuidado que quema", tipo : "Manual", musculosTrabajados : "Brazo", material : "Plancha, tabla de planchar",
    dificultad : "1", multimedia : [], id : 1},
    {nombre : "Cabezazo", descripcion : "Meterle un cabezazo" , observaciones : "CABEZAZO PUM", tipo : "Dolor de cabeza", musculosTrabajados : "cabeza", material : "casco (opcional) ",
    dificultad : "8", multimedia : [], id : 2},
    {nombre : "Sentadillas", descripcion : "Bajar el culo" , observaciones : "Observacion inteligente", tipo : "sentarse", musculosTrabajados : "Gluteos", material : "Ninguno",
    dificultad : "3", multimedia : [], id : 0},
    {nombre : "Plancha", descripcion : "Planchar la ropa" , observaciones : "Cuidado que quema", tipo : "Manual", musculosTrabajados : "Brazo", material : "Plancha, tabla de planchar",
    dificultad : "1", multimedia : [], id : 1},
    {nombre : "Cabezazo", descripcion : "Meterle un cabezazo" , observaciones : "CABEZAZO PUM", tipo : "Dolor de cabeza", musculosTrabajados : "cabeza", material : "casco (opcional) ",
    dificultad : "8", multimedia : [], id : 2},
    {nombre : "Sentadillas", descripcion : "Bajar el culo" , observaciones : "Observacion inteligente", tipo : "sentarse", musculosTrabajados : "Gluteos", material : "Ninguno",
    dificultad : "3", multimedia : [], id : 0},
    {nombre : "Plancha", descripcion : "Planchar la ropa" , observaciones : "Cuidado que quema", tipo : "Manual", musculosTrabajados : "Brazo", material : "Plancha, tabla de planchar",
    dificultad : "1", multimedia : [], id : 1},
    {nombre : "Cabezazo", descripcion : "Meterle un cabezazo" , observaciones : "CABEZAZO PUM", tipo : "Dolor de cabeza", musculosTrabajados : "cabeza", material : "casco (opcional) ",
    dificultad : "8", multimedia : [], id : 2},
    {nombre : "Sentadillas", descripcion : "Bajar el culo" , observaciones : "Observacion inteligente", tipo : "sentarse", musculosTrabajados : "Gluteos", material : "Ninguno",
    dificultad : "3", multimedia : [], id : 0},
    {nombre : "Plancha", descripcion : "Planchar la ropa" , observaciones : "Cuidado que quema", tipo : "Manual", musculosTrabajados : "Brazo", material : "Plancha, tabla de planchar",
    dificultad : "1", multimedia : [], id : 1},
    {nombre : "Cabezazo", descripcion : "Meterle un cabezazo" , observaciones : "CABEZAZO PUM", tipo : "Dolor de cabeza", musculosTrabajados : "cabeza", material : "casco (opcional) ",
    dificultad : "8", multimedia : [], id : 2},
    {nombre : "Sentadillas", descripcion : "Bajar el culo" , observaciones : "Observacion inteligente", tipo : "sentarse", musculosTrabajados : "Gluteos", material : "Ninguno",
    dificultad : "3", multimedia : [], id : 0},
    {nombre : "Plancha", descripcion : "Planchar la ropa" , observaciones : "Cuidado que quema", tipo : "Manual", musculosTrabajados : "Brazo", material : "Plancha, tabla de planchar",
    dificultad : "1", multimedia : [], id : 1},
    {nombre : "Cabezazo", descripcion : "Meterle un cabezazo" , observaciones : "CABEZAZO PUM", tipo : "Dolor de cabeza", musculosTrabajados : "cabeza", material : "casco (opcional) ",
    dificultad : "8", multimedia : [], id : 2},
    {nombre : "Sentadillas", descripcion : "Bajar el culo" , observaciones : "Observacion inteligente", tipo : "sentarse", musculosTrabajados : "Gluteos", material : "Ninguno",
    dificultad : "3", multimedia : [], id : 0},
    {nombre : "Plancha", descripcion : "Planchar la ropa" , observaciones : "Cuidado que quema", tipo : "Manual", musculosTrabajados : "Brazo", material : "Plancha, tabla de planchar",
    dificultad : "1", multimedia : [], id : 1},
    {nombre : "Cabezazo", descripcion : "Meterle un cabezazo" , observaciones : "CABEZAZO PUM", tipo : "Dolor de cabeza", musculosTrabajados : "cabeza", material : "casco (opcional) ",
    dificultad : "8", multimedia : [], id : 2},
   ];
   
   private rutinas: RutinaDTO[] = [];


  constructor() { }

  getEjercicios(idEntrenador : number): Observable<EjercicioDTO[]> {
    return of(this.ejercicios);
  }

  postEjercicio(idEntrenador : number,ejercicio: EjercicioDTO) : Observable<EjercicioDTO>{ 
    ejercicio.id = Math.max(...this.ejercicios.map(c => c.id)) + 1;
    this.ejercicios.push(ejercicio);
    return of(ejercicio);
  }

  putEjercicio(idEntrenador : number,ejercicio: EjercicioDTO) : Observable<EjercicioDTO>{
    let indice = this.ejercicios.findIndex(c => c.id == ejercicio.id);
    this.ejercicios[indice] = ejercicio;
    return of(this.ejercicios[indice]);
  }

  deleteEjercicio(id: number) : Observable<void> {
    let indice = this.ejercicios.findIndex(c => c.id == id);
    this.ejercicios.splice(indice, 1);
    return of();
  }

  getRutinas(idEntrenador : number): Observable<RutinaDTO[]> {
    return of(this.rutinas);
  }

  postRutina(idEntrenador : number,rutina: RutinaDTO) : Observable<RutinaDTO>{ 
    rutina.id = Math.max(...this.rutinas.map(c => c.id)) + 1;
    this.rutinas.push(rutina);
    return of(rutina);
  }

  putRutina(idEntrenador : number,rutina: RutinaDTO) : Observable<RutinaDTO>{
    let indice = this.rutinas.findIndex(c => c.id == rutina.id);
    this.rutinas[indice] = rutina;
    return of(this.rutinas[indice]);
  }

  deleteRutina(id: number) : Observable<void> {
    let indice = this.rutinas.findIndex(c => c.id == id);
    this.rutinas.splice(indice, 1);
    return of();
  }
}
