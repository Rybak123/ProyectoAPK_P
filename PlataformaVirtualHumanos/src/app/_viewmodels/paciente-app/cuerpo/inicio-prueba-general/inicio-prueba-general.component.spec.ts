import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPruebaGeneralComponent } from './inicio-prueba-general.component';

describe('InicioPruebaGeneralComponent', () => {
  let component: InicioPruebaGeneralComponent;
  let fixture: ComponentFixture<InicioPruebaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPruebaGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPruebaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
