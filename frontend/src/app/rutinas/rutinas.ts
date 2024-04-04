import {Ejercicio} from "../ejercicio/ejercicio"

export interface Rutinas{
    id : number,
    nombre : string,
    descripcion : string
    ejercicios : Ejercicio[]
}