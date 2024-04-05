import { EjercicioDTO } from "../ejercicio/ejercicio"

export interface FragmentoRutinaDTO {
    series? : number,
    repeticiones? : number,
    duracionMinutos? : number,
    ejercicios? : EjercicioDTO
}