import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { EjercicioComponent } from './ejercicio.component';


import { EjerciciosService } from '../services/ejercicios.service';
import { BackendService } from '../services/backend.service';
describe('EjercicioComponent', () => {
  let component: EjercicioComponent;
  let fixture: ComponentFixture<EjercicioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      
      imports: [HttpClientModule,  EjercicioComponent], // Importa HttpClientModule para proporcionar HttpClient
      providers: [
        EjerciciosService, // Proporciona EjerciciosService
        BackendService // Proporciona BackendService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call aniadirEjercicio() when button is clicked', () => {
    spyOn(component, 'aniadirEjercicio');
    const button = fixture.debugElement.query(By.css('#boton_aniadir'));
    button.triggerEventHandler('click', null);
    expect(component.aniadirEjercicio).toHaveBeenCalled();
  });

  
  
});
