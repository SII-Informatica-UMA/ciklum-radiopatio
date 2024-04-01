import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioEditarComponent } from './ejercicio-editar.component';

describe('EjercicioEditarComponent', () => {
  let component: EjercicioEditarComponent;
  let fixture: ComponentFixture<EjercicioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjercicioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
