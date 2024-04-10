import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinasComponent } from './rutinas.component';
import { RutinaDTO } from './rutinas';
import { HttpClientModule } from '@angular/common/http';

describe('RutinasComponent', () => {
  let component: RutinasComponent;
  let fixture: ComponentFixture<RutinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a routine when add routine button is clicked', () => {
    spyOn(component, 'aniadirRutina'); // Espía el método aniadirRutina
    
    const addButton = fixture.nativeElement.querySelector('#boton_aniadir');
    addButton.click();
    
    expect(component.aniadirRutina).toHaveBeenCalled(); // Verifica que el método aniadirRutina haya sido llamado cuando se hace clic en el botón
  });

  it('should display routine details when a routine is clicked', () => {
    const rutina: RutinaDTO = { id: 1, nombre: 'Rutina de prueba' };
    component.rutinas = [rutina];
    fixture.detectChanges();
  
    const rutinaButton = fixture.nativeElement.querySelector('.list-group-item');
    rutinaButton.click();
    fixture.detectChanges();
  
    const detallesRutina = fixture.nativeElement.querySelector('app-rutina-detalles');
    expect(detallesRutina).toBeTruthy(); // Verifica que se muestren los detalles de la rutina cuando se hace clic en ella
  });
});
