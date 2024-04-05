
import { FragmentoRutinaDTO } from './fragmentoRutina';

export interface RutinaNuevaDTO { 
    nombre?: string;
    descripcion?: string;
    observaciones?: string;
    ejercicios?: Array<FragmentoRutinaDTO>;
}