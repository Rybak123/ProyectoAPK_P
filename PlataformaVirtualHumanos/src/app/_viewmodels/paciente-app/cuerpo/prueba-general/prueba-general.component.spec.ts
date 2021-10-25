import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaGeneralComponent } from './prueba-general.component';

describe('PruebaGeneralComponent', () => {
  let component: PruebaGeneralComponent;
  let fixture: ComponentFixture<PruebaGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
