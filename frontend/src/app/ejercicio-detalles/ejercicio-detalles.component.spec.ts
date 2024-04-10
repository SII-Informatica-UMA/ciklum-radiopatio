import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { RutinasComponent } from '../rutinas/rutinas.component';
import { EjerciciosService } from '../services/ejercicios.service'; // Importa tus servicios aquí
import { BackendService } from '../services/backend.service';

describe('RutinasComponent', () => {
  let component: RutinasComponent;
  let fixture: ComponentFixture<RutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RutinasComponent],
      imports: [HttpClientModule], // Importa HttpClientModule para proporcionar HttpClient
      providers: [EjerciciosService, BackendService] // Asegúrate de proporcionar tus servicios aquí
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
