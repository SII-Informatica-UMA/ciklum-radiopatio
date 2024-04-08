import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaDetallesComponent } from './rutina-detalles.component';

describe('RutinaDetallesComponent', () => {
  let component: RutinaDetallesComponent;
  let fixture: ComponentFixture<RutinaDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RutinaDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RutinaDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
