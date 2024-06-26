import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

  describe('AppComponent',  () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
      })
        .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('NO PAIN NO GAIN');
  });

  it('should display carousel with three items', () => {
    const carouselItems = fixture.debugElement.queryAll(By.css('.carousel-item'));
    expect(carouselItems.length).toBe(3);
  });


  it('should call verRutina() when clicking on the rutinas button', () => {
    spyOn(component, 'verRutina'); // "espia" la funcion verRutina() para comprobar si se llama

    const button = fixture.debugElement.query(By.css('#boton_rutina')); 
    button.triggerEventHandler('click', null); // simula un click en el boton de rutinas

    expect(component.verRutina).toHaveBeenCalled(); // verifica que la funcion verRutina() se haya llamado
  });

  it('should call verEjercicio() when clicking on the ejercicios button', () => {
    spyOn(component, 'verEjercicio');

    const button = fixture.debugElement.query(By.css('#boton_ejercicio'));
    button.triggerEventHandler('click', null);

    expect(component.verEjercicio).toHaveBeenCalled();
  });
});
