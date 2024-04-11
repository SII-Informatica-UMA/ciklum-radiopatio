import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importa FormsModule si lo estás utilizando
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // Importa NgbActiveModal si lo estás utilizando
import { EjercicioFormularioComponent } from './ejercicio-formulario.component';
import { By } from '@angular/platform-browser';
// Crea una clase de simulación para NgbActiveModal si es necesario
class MockNgbActiveModal {
  // Implementa cualquier método o propiedad que necesites para las pruebas
}

describe('EjercicioFormularioComponent', () => {
  let component: EjercicioFormularioComponent;
  let fixture: ComponentFixture<EjercicioFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ /* No incluyas el componente aquí */ ],
      imports: [FormsModule], // Asegúrate de importar FormsModule si lo estás utilizando
      providers: [
        // Proporciona NgbActiveModal utilizando la clase de simulación si es necesario
        { provide: NgbActiveModal, useClass: MockNgbActiveModal }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the model when input value changes', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'Nuevo nombre'; // Simula el cambio de valor en el campo de entrada
    inputElement.dispatchEvent(new Event('input')); // Dispara el evento de entrada manualmente
    fixture.detectChanges();
    
    expect(component.ejercicio.nombre).toEqual('Nuevo nombre'); // Comprueba que el modelo se haya actualizado correctamente
  });
  it('should update the model when textarea value changes', () => {
    const textareaElement = fixture.debugElement.query(By.css('textarea')).nativeElement;
    textareaElement.value = 'Nueva descripción'; // Simula el cambio de valor en el textarea
    textareaElement.dispatchEvent(new Event('input')); // Dispara el evento de entrada manualmente
    fixture.detectChanges();
    
    expect(component.ejercicio.descripcion).toEqual('Nueva descripción'); // Comprueba que el modelo se haya actualizado correctamente
  });

  
  
  

  
});

