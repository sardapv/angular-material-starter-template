import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeLoginComponent } from './before-login.component';

describe('BeforeLoginComponent', () => {
  let component: BeforeLoginComponent;
  let fixture: ComponentFixture<BeforeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
