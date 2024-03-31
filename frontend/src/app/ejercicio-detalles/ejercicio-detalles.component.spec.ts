import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioDetallesComponent } from './ejercicio-detalles.component';

describe('EjercicioDetallesComponent', () => {
  let component: EjercicioDetallesComponent;
  let fixture: ComponentFixture<EjercicioDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
