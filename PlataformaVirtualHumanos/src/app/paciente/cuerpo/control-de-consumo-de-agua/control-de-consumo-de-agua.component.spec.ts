import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDeConsumoDeAguaComponent } from './control-de-consumo-de-agua.component';

describe('ControlDeConsumoDeAguaComponent', () => {
  let component: ControlDeConsumoDeAguaComponent;
  let fixture: ComponentFixture<ControlDeConsumoDeAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDeConsumoDeAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDeConsumoDeAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
