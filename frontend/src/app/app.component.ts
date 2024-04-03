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

  verEjercicio() {
    this.router.navigate(['/ejercicio']); // Navega a la ruta '/ejercicio' cuando se hace clic en el botón
  }
  
}