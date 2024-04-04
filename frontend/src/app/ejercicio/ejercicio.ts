import { Img } from "./imagen";

export interface Ejercicio {
    id: number;
    nombre: string;
    descripcion: string;
    materiales: string;
    video: string;
    carga: string;
    imagen: Img | null;
    
  }