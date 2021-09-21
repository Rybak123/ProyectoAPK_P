import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMetasSocialesComponent } from './crear-metas-sociales.component';

describe('CrearMetasSocialesComponent', () => {
  let component: CrearMetasSocialesComponent;
  let fixture: ComponentFixture<CrearMetasSocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMetasSocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMetasSocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
