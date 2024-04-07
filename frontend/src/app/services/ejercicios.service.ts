import { Injectable } from "@angular/core";
import { BackendFakeService } from "./backend.fake.service";
import { BackendService } from "./backend.service";
import { EjercicioDTO } from "../ejercicio/ejercicio";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class EjerciciosService{

    constructor(private backend : BackendFakeService){}

      getEjercicios(idEntrenador : number): Observable<EjercicioDTO[]>{ 
        return this.backend.getEjercicios(idEntrenador);
      }
    
      postEjercicio(idEntrenador : number,ejercicio: EjercicioDTO) : Observable<EjercicioDTO>{
        return this.backend.postEjercicio(idEntrenador,ejercicio);
      }
    
      putEjercicio(idEjercicio : number,ejercicio: EjercicioDTO) : Observable<EjercicioDTO>{ 
        return this.backend.putEjercicio(idEjercicio,ejercicio);
      }
    
      deleteEjercicio(id: number) : Observable<void>{ 
        return this.backend.deleteEjercicio(id);
      }

      getRutina(idEntrenador : number): Observable<EjercicioDTO[]>{ 
        return this.backend.getEjercicios(idEntrenador);
      }
    
      postRutina(idEntrenador : number,ejercicio: EjercicioDTO) : Observable<EjercicioDTO>{
        return this.backend.postEjercicio(idEntrenador,ejercicio);
      }
    
      putRutina(idEntrenador : number,ejercicio: EjercicioDTO) : Observable<EjercicioDTO>{ 
        return this.backend.putEjercicio(idEntrenador,ejercicio);
      }
    
      deleteRutina(id: number) : Observable<void>{ 
        return this.backend.deleteEjercicio(id);
      }
}