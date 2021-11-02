import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralResultadosComponent } from './prueba-general-resultados.component';

describe('PruebaGeneralResultadosComponent', () => {
  let component: PruebaGeneralResultadosComponent;
  let fixture: ComponentFixture<PruebaGeneralResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
