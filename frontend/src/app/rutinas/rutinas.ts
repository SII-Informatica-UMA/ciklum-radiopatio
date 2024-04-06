import { FragmentoRutinaDTO } from "./fragmentoRutina"

export interface RutinaDTO{
    nombre? : string,
    descripcion? : string,
    observaciones? : string,
    ejercicios? : Array<FragmentoRutinaDTO>
    id? : number
}