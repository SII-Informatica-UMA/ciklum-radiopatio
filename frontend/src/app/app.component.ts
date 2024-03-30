import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  constructor(private modalService: NgbModal) {}
  title = 'ejercicios_rutinas';
  abrirModalEjercicios() {
  let ref = this.modalService.open(EjercicioComponent);
  }
}
