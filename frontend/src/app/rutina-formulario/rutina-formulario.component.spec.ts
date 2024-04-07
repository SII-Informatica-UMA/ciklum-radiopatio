import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaFormularioComponent } from './rutina-formulario.component';

describe('RutinaFormularioComponent', () => {
  let component: RutinaFormularioComponent;
  let fixture: ComponentFixture<RutinaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutinaFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutinaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
