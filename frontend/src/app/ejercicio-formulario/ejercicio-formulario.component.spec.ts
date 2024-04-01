import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioFormularioComponent } from './ejercicio-formulario.component';

describe('EjercicioFormularioComponent', () => {
  let component: EjercicioFormularioComponent;
  let fixture: ComponentFixture<EjercicioFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
