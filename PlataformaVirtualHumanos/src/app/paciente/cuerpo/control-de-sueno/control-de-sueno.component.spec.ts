import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDeSuenoComponent } from './control-de-sueno.component';

describe('ControlDeSuenoComponent', () => {
  let component: ControlDeSuenoComponent;
  let fixture: ComponentFixture<ControlDeSuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDeSuenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDeSuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
