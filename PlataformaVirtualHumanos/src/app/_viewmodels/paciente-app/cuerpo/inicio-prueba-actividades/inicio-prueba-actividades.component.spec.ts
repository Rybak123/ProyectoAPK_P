import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPruebaActividadesComponent } from './inicio-prueba-actividades.component';

describe('InicioPruebaActividadesComponent', () => {
  let component: InicioPruebaActividadesComponent;
  let fixture: ComponentFixture<InicioPruebaActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPruebaActividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPruebaActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
