import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { EjerciciosService } from '../services/ejercicios.service'; // Importa tus servicios aquí
import { BackendService } from '../services/backend.service';
import { By } from '@angular/platform-browser';
import { EjercicioDetallesComponent } from './ejercicio-detalles.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


describe('RutinasComponent', () => {
  let component: EjercicioDetallesComponent;
  let fixture: ComponentFixture<EjercicioDetallesComponent>;
  let modalService: NgbModal;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule], // Importa HttpClientModule para proporcionar HttpClient
      providers: [EjerciciosService, BackendService, NgbModal] // Asegúrate de proporcionar tus servicios aquí
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioDetallesComponent);
    component = fixture.componentInstance;
    modalService = TestBed.inject(NgbModal);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call editarEjercicio() when clicking on the edit button', () => {
    spyOn(component, 'editarEjercicio');
    
    const editButton = fixture.debugElement.query(By.css('#boton_editar'));
    editButton.nativeElement.click();
  
    expect(component.editarEjercicio).toHaveBeenCalled();
  });
  
});
