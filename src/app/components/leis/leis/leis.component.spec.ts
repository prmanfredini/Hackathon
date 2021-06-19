import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisComponent } from './leis.component';

describe('LeisComponent', () => {
  let component: LeisComponent;
  let fixture: ComponentFixture<LeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
