import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) { }
  viendoEjercicio = false;
  viendoRutinas = false;

  verEjercicio() {
    if(!this.viendoEjercicio){
      this.router.navigate(['/ejercicio']); // Navega a la ruta '/ejercicio' cuando se hace clic en el botón
      this.viendoEjercicio = true;
      this.viendoRutinas = false;
    }else{
      this.router.navigate(['/']); // Navega a la ruta '/ejercicio' cuando se hace clic en el botón
      this.viendoEjercicio = false;
    }
  }

  verRutina() {
    if(!this.viendoRutinas){
      this.router.navigate(['/rutina']); // Navega a la ruta '/ejercicio' cuando se hace clic en el botón
      this.viendoRutinas = true;
      this.viendoEjercicio = false;
    }else{
      this.router.navigate(['/']); // Navega a la ruta '/ejercicio' cuando se hace clic en el botón
      this.viendoRutinas = false;
    }
  }
  
}