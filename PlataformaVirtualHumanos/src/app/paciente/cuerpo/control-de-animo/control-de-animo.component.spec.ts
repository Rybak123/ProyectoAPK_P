import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDeAnimoComponent } from './control-de-animo.component';

describe('ControlDeAnimoComponent', () => {
  let component: ControlDeAnimoComponent;
  let fixture: ComponentFixture<ControlDeAnimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDeAnimoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlDeAnimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
