import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenDeLaAgendaVirtualComponent } from './resumen-de-la-agenda-virtual.component';

describe('ResumenDeLaAgendaVirtualComponent', () => {
  let component: ResumenDeLaAgendaVirtualComponent;
  let fixture: ComponentFixture<ResumenDeLaAgendaVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenDeLaAgendaVirtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenDeLaAgendaVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
