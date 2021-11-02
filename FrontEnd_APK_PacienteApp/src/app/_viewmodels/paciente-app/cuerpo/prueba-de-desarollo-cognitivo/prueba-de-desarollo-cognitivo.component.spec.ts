import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDeDesarolloCognitivoComponent } from './prueba-de-desarollo-cognitivo.component';

describe('PruebaDeDesarolloCognitivoComponent', () => {
  let component: PruebaDeDesarolloCognitivoComponent;
  let fixture: ComponentFixture<PruebaDeDesarolloCognitivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDeDesarolloCognitivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaDeDesarolloCognitivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
