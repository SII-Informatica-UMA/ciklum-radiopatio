import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinaDetallesComponent } from './rutina-detalles.component';
import { HttpClientModule } from '@angular/common/http';


describe('RutinaDetallesComponent', () => {
  let component: RutinaDetallesComponent;
  let fixture: ComponentFixture<RutinaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutinaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display routine details correctly', () => {
    component.rutina = {
      id: 1,
      nombre: 'Rutina de prueba',
      descripcion: 'Esta es una descripción de la rutina',
      observaciones: 'Estas son algunas observaciones sobre la rutina'
    };
    fixture.detectChanges();
  
    const detallesNombre = fixture.nativeElement.querySelector('h2');
    expect(detallesNombre.textContent).toContain('Rutina de prueba'); // Verifica que se muestre el nombre de la rutina
  
    const detallesDescripcion = fixture.nativeElement.querySelector('label[for="descripcion"]');
    expect(detallesDescripcion.textContent).toContain('Descripcion'); // Verifica que se muestre correctamente la etiqueta de la descripción
  
    const detallesObservaciones = fixture.nativeElement.querySelector('label[for="observaciones"]');
    expect(detallesObservaciones.textContent).toContain('Observaciones'); // Verifica que se muestre correctamente la etiqueta de observaciones
  });

  it('should call delete and edit methods when respective buttons are clicked', () => {
    spyOn(component, 'eliminarRutina');
    spyOn(component, 'editarRutina');
  
    const botonEliminar = fixture.nativeElement.querySelector('#boton_eliminar');
    botonEliminar.click();
    expect(component.eliminarRutina).toHaveBeenCalled(); 
  
    const botonEditar = fixture.nativeElement.querySelector('#boton_editar');
    botonEditar.click();
    expect(component.editarRutina).toHaveBeenCalled(); 
  });
});
