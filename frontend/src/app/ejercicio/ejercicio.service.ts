import { Injectable } from '@angular/core';
import { EjercicioDTO } from './ejercicio';


@Injectable({
  providedIn: 'root'
})

export class EjercicioService {
  private ejercicios: EjercicioDTO []=[
    {id: 1, nombre: 'Sentadillas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos. La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.'},
    {id: 2, nombre: 'Flexiones', descripcion: 'Las flexiones son un ejercicio donde se empuja el cuerpo hacia arriba desde una posición boca abajo, fortaleciendo pecho, hombros y tríceps. Variaciones disponibles. Técnica adecuada es clave.', material: 'opcionlmente una esterilla'},
    {id: 3, nombre: 'Dominadas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos.'},
    {id: 4, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.'},
    {id: 5, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.'},
    {id: 6, nombre: 'Dominadas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos.'},
    {id: 7, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.'},
    {id: 8, nombre: 'Flexiones', descripcion: 'Las flexiones son un ejercicio donde se empuja el cuerpo hacia arriba desde una posición boca abajo, fortaleciendo pecho, hombros y tríceps. Variaciones disponibles. Técnica adecuada es clave.', material: 'opcionlmente una esterilla'},
    {id: 9, nombre: 'Dominadas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos.'},
    {id: 10, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.'},
    {id: 11, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.'},
    {id: 12, nombre: 'Flexiones', descripcion: 'Las flexiones son un ejercicio donde se empuja el cuerpo hacia arriba desde una posición boca abajo, fortaleciendo pecho, hombros y tríceps. Variaciones disponibles. Técnica adecuada es clave.', material: 'opcionlmente una esterilla'},
    {id: 13, nombre: 'Dominadas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos.'},
    {id: 14, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.'},
    {id: 15, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.'},
    {id: 16, nombre: 'Dominadas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos.'},
    {id: 17, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.'},
    {id: 18, nombre: 'Flexiones', descripcion: 'Las flexiones son un ejercicio donde se empuja el cuerpo hacia arriba desde una posición boca abajo, fortaleciendo pecho, hombros y tríceps. Variaciones disponibles. Técnica adecuada es clave.', material: 'opcionlmente una esterilla'},
    {id: 19, nombre: 'Dominadas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos.'},
    {id: 20, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.'},
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
