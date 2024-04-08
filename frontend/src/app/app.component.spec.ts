import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

  describe('AppComponent',  () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [],
      })
        .compileComponents();
    });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

/*   it(`should have the 'ejercicios_rutinas' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ejercicios_rutinas');
  });
 */
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

  it('should trigger verEjercicio method when "EJERCICIOS" button is clicked', () => {
    spyOn(component, 'verEjercicio');
    const button = fixture.debugElement.query(By.css('#boton_ejercicio'));
    button.triggerEventHandler('click', null);
    expect(component.verEjercicio).toHaveBeenCalled();
  });

  it('should trigger verRutina method when "RUTINAS" button is clicked', () => {
    spyOn(component, 'verRutina');
    const button = fixture.debugElement.query(By.css('#boton_rutina'));
    button.triggerEventHandler('click', null);
    expect(component.verRutina).toHaveBeenCalled();
  });
});
