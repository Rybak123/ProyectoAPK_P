import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDeEnergiaComponent } from './control-de-energia.component';

describe('ControlDeEnergiaComponent', () => {
  let component: ControlDeEnergiaComponent;
  let fixture: ComponentFixture<ControlDeEnergiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDeEnergiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDeEnergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
