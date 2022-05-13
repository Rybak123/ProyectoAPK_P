import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMetasPersonalesComponent } from './crear-metas-personales.component';

describe('CrearMetasPersonalesComponent', () => {
  let component: CrearMetasPersonalesComponent;
  let fixture: ComponentFixture<CrearMetasPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearMetasPersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearMetasPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
