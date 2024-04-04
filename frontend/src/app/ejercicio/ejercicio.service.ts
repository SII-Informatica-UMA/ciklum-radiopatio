import { Injectable } from '@angular/core';
import { Ejercicio } from './ejercicio';


@Injectable({
  providedIn: 'root'
})

export class EjercicioService {
  private ejercicios: Ejercicio []=[
    {id: 1, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.', materiales: 'pesas, barras, mancuernas, kettlebells o bandas de resistencia', video: 'https://www.youtube.com/watch?v=BjixzWEw4EY&ab_channel=FisioOnline', carga: 'fuerza', imagen:{src:"../assets/sentadilla.jpg"}},
    {id: 2, nombre: 'Flexiones', descripcion: 'Las flexiones son un ejercicio donde se empuja el cuerpo hacia arriba desde una posición boca abajo, fortaleciendo pecho, hombros y tríceps. Variaciones disponibles. Técnica adecuada es clave.', materiales: 'opcionlmente una esterilla', video: 'https://www.youtube.com/watch?v=iAEM8Mx-4nM&ab_channel=P4PEspa%C3%B1ol', carga: 'fuerza',imagen:{src:"../assets/flexion.jpg"} },
    {id: 3, nombre: 'Dominadas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos.', materiales: 'barra de dominadas', video: 'https://www.youtube.com/watch?v=zl6OyGRqzOA&ab_channel=JeronimoMilo', carga: 'fuerza', imagen:{src:"../assets/dominada.jpg"}},
    {id: 4, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.', materiales: 'pesas, barras, mancuernas, kettlebells o bandas de resistencia', video: 'https://www.youtube.com/watch?v=BjixzWEw4EY&ab_channel=FisioOnline', carga: 'fuerza', imagen:{src:"../assets/sentadilla.jpg"}},
    {id: 5, nombre: 'Flexiones', descripcion: 'Las flexiones son un ejercicio donde se empuja el cuerpo hacia arriba desde una posición boca abajo, fortaleciendo pecho, hombros y tríceps. Variaciones disponibles. Técnica adecuada es clave.', materiales: 'opcionlmente una esterilla', video: 'https://www.youtube.com/watch?v=iAEM8Mx-4nM&ab_channel=P4PEspa%C3%B1ol', carga: 'fuerza',imagen:{src:"../assets/flexion.jpg"} },
    {id: 6, nombre: 'Dominadas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos.', materiales: 'barra de dominadas', video: 'https://www.youtube.com/watch?v=zl6OyGRqzOA&ab_channel=JeronimoMilo', carga: 'fuerza', imagen:{src:"../assets/dominada.jpg"}},
    {id: 7, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.', materiales: 'pesas, barras, mancuernas, kettlebells o bandas de resistencia', video: 'https://www.youtube.com/watch?v=BjixzWEw4EY&ab_channel=FisioOnline', carga: 'fuerza', imagen:{src:"../assets/sentadilla.jpg"}},
    {id: 8, nombre: 'Flexiones', descripcion: 'Las flexiones son un ejercicio donde se empuja el cuerpo hacia arriba desde una posición boca abajo, fortaleciendo pecho, hombros y tríceps. Variaciones disponibles. Técnica adecuada es clave.', materiales: 'opcionlmente una esterilla', video: 'https://www.youtube.com/watch?v=iAEM8Mx-4nM&ab_channel=P4PEspa%C3%B1ol', carga: 'fuerza',imagen:{src:"../assets/flexion.jpg"} },
    {id: 9, nombre: 'Dominadas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos.', materiales: 'barra de dominadas', video: 'https://www.youtube.com/watch?v=zl6OyGRqzOA&ab_channel=JeronimoMilo', carga: 'fuerza', imagen:{src:"../assets/dominada.jpg"}},
    {id: 10, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.', materiales: 'pesas, barras, mancuernas, kettlebells o bandas de resistencia', video: 'https://www.youtube.com/watch?v=BjixzWEw4EY&ab_channel=FisioOnline', carga: 'fuerza', imagen:{src:"../assets/sentadilla.jpg"}},
    {id: 11, nombre: 'Flexiones', descripcion: 'Las flexiones son un ejercicio donde se empuja el cuerpo hacia arriba desde una posición boca abajo, fortaleciendo pecho, hombros y tríceps. Variaciones disponibles. Técnica adecuada es clave.', materiales: 'opcionlmente una esterilla', video: 'https://www.youtube.com/watch?v=iAEM8Mx-4nM&ab_channel=P4PEspa%C3%B1ol', carga: 'fuerza',imagen:{src:"../assets/flexion.jpg"} },
    {id: 12, nombre: 'Dominadas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos.', materiales: 'barra de dominadas', video: 'https://www.youtube.com/watch?v=zl6OyGRqzOA&ab_channel=JeronimoMilo', carga: 'fuerza', imagen:{src:"../assets/dominada.jpg"}},
    {id: 13, nombre: 'Sentadillas', descripcion: 'La sentadilla es un ejercicio de fuerza donde se flexionan rodillas y caderas para bajar el cuerpo, trabajando piernas, glúteos y espalda baja. Se puede hacer con peso corporal o añadiendo peso extra. Es crucial mantener una buena técnica para evitar lesiones y obtener beneficios óptimos.', materiales: 'pesas, barras, mancuernas, kettlebells o bandas de resistencia', video: 'https://www.youtube.com/watch?v=BjixzWEw4EY&ab_channel=FisioOnline', carga: 'fuerza', imagen:{src:"../assets/sentadilla.jpg"}},
    {id: 14, nombre: 'Flexiones', descripcion: 'Las flexiones son un ejercicio donde se empuja el cuerpo hacia arriba desde una posición boca abajo, fortaleciendo pecho, hombros y tríceps. Variaciones disponibles. Técnica adecuada es clave.', materiales: 'opcionlmente una esterilla', video: 'https://www.youtube.com/watch?v=iAEM8Mx-4nM&ab_channel=P4PEspa%C3%B1ol', carga: 'fuerza',imagen:{src:"../assets/flexion.jpg"} },
    {id: 15, nombre: 'Dominadas', descripcion: 'Las dominadas son un ejercicio de fuerza en el que te cuelgas de una barra con las manos separadas a la anchura de los hombros y levantas tu cuerpo hasta que tu barbilla esté por encima de la barra.Es un excelente ejercicio para desarrollar fuerza en la espalda, hombros y brazos.', materiales: 'barra de dominadas', video: 'https://www.youtube.com/watch?v=zl6OyGRqzOA&ab_channel=JeronimoMilo', carga: 'fuerza', imagen:{src:"../assets/dominada.jpg"}},
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
