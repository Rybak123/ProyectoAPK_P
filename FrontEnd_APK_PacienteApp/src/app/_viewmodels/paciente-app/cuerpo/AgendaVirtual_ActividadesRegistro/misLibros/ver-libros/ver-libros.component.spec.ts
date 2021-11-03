import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerLibrosComponent } from './ver-libros.component';

describe('VerLibrosComponent', () => {
  let component: VerLibrosComponent;
  let fixture: ComponentFixture<VerLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerLibrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
