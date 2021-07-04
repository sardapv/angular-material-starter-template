import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SharedModule } from '../../shared/shared.module';

import { BeforeLoginComponent } from './before-login.component';

describe('BeforeLoginComponent', () => {
  let component: BeforeLoginComponent;
  let fixture: ComponentFixture<BeforeLoginComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BeforeLoginComponent],
        imports: [SharedModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
