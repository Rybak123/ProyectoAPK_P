import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMetasPersonalesComponent } from './ver-metas-personales.component';

describe('VerMetasPersonalesComponent', () => {
  let component: VerMetasPersonalesComponent;
  let fixture: ComponentFixture<VerMetasPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMetasPersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMetasPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
