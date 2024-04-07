import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { EjercicioDTO } from "../ejercicio/ejercicio";
import { BACKEND_URI } from "../config/config";
import { RutinaDTO } from "../rutinas/rutinaDTO";

@Injectable({
    providedIn: 'root'
  })

  export class BackendService{
    constructor(private httpClient: HttpClient) {}

    getEjercicios(idEntrenador : number) : Observable<EjercicioDTO[]>{
        return this.httpClient.get<EjercicioDTO[]>(BACKEND_URI+"/ejercicio?entrenador="+idEntrenador);
    }

    getRutinas(idEntrenador : number) : Observable<RutinaDTO[]>{
        return this.httpClient.get<EjercicioDTO[]>(BACKEND_URI+"/rutina?entrenador="+idEntrenador);
    }

    postEjercicio(idEntrenador : number, ejercicio : EjercicioDTO) : Observable<EjercicioDTO>{
        return this.httpClient.post<EjercicioDTO>(BACKEND_URI+"/rutina?entrenador="+idEntrenador,ejercicio);
    }

    postRutina(idEntrenador : number, rutina : RutinaDTO) : Observable<EjercicioDTO>{
        return this.httpClient.post<EjercicioDTO>(BACKEND_URI+"/rutina?entrenador="+idEntrenador,rutina);
    }

    getEjercicio( idEjercicio : number) : Observable<EjercicioDTO>{
        return this.httpClient.get<EjercicioDTO>(BACKEND_URI+"/ejercicio/"+idEjercicio);
    }

    putEjercicio( idEjercicio : number, ejercicio : EjercicioDTO ) : Observable<EjercicioDTO>{
        return this.httpClient.put<EjercicioDTO>(BACKEND_URI+"/ejercicio/"+idEjercicio,ejercicio);
    }
    
    deleteEjercicio( idEjercicio : number) : Observable<void>{
        return this.httpClient.delete<void>(BACKEND_URI+"/ejercicio/"+idEjercicio);
    }

    getRutina( idRutina : number) : Observable<RutinaDTO>{
        return this.httpClient.get<EjercicioDTO>(BACKEND_URI+"/ejercicio/"+idRutina);
    }

    putRutina( idRutina : number, rutina : RutinaDTO ) : Observable<RutinaDTO>{
        return this.httpClient.put<EjercicioDTO>(BACKEND_URI+"/ejercicio/"+idRutina,rutina);
    }
    
    deleteRutina( idRutina : number) : Observable<void>{
        return this.httpClient.delete<void>(BACKEND_URI+"/ejercicio/"+idRutina);
    }

  }