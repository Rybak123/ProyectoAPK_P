import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosPruebasDeDesarolloCognitivoComponent } from './resultados-pruebas-de-desarollo-cognitivo.component';

describe('ResultadosPruebasDeDesarolloCognitivoComponent', () => {
  let component: ResultadosPruebasDeDesarolloCognitivoComponent;
  let fixture: ComponentFixture<ResultadosPruebasDeDesarolloCognitivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosPruebasDeDesarolloCognitivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosPruebasDeDesarolloCognitivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
