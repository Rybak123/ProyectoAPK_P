import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPruebaMarcoComponent } from './inicio-prueba-marco.component';

describe('InicioPruebaMarcoComponent', () => {
  let component: InicioPruebaMarcoComponent;
  let fixture: ComponentFixture<InicioPruebaMarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPruebaMarcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPruebaMarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
