import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) { }

  verLista() {
    this.router.navigate(['/ejercicio']); // Navega a la ruta '/ejercicio' cuando se hace clic en el botón
  }
  
}