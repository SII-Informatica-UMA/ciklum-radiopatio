

export interface EjercicioDTO {
    nombre? : string,
    descripcion? : string,
    observaciones? : string,
    tipo? : string,
    musculosTrabajados? : string 
    material? : string
    dificultad? : string 
    multimedia? : Array<string>
    id : number
  }