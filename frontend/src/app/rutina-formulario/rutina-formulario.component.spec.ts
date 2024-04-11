import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinaFormularioComponent } from './rutina-formulario.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

describe('RutinaFormularioComponent', () => {
  let component: RutinaFormularioComponent;
  let fixture: ComponentFixture<RutinaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbModule,HttpClientModule],
      providers: [NgbActiveModal]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutinaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display correct title in the modal', () => {
    fixture.componentInstance.accion = 'Añadir';
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.modal-title');
    expect(titleElement.textContent).toContain('Añadir rutina');
  });

  it('should enable save button when input fields are modified', () => {
    const saveButton = fixture.nativeElement.querySelector('.btn-outline-dark');
  
    // Simulamos cambios en los campos de entrada
    const nombreInput = fixture.nativeElement.querySelector('#nombre');
    nombreInput.value = 'Nueva Rutina';
    nombreInput.dispatchEvent(new Event('input'));
  
    fixture.detectChanges();
  
    expect(saveButton.disabled).toBe(false);
  });
});
