import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorAppComponent } from './administrador-app.component';

describe('AdministradorAppComponent', () => {
  let component: AdministradorAppComponent;
  let fixture: ComponentFixture<AdministradorAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
