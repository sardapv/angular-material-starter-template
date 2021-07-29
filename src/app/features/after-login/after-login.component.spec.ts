import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ScamComponent } from '@shared/components/scam/scam.component';
import { SharedModule } from '../../shared/shared.module';

import { AfterLoginComponent } from './after-login.component';

describe('AfterLoginComponent', () => {
  let component: AfterLoginComponent;
  let fixture: ComponentFixture<AfterLoginComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AfterLoginComponent, ScamComponent],
        imports: [SharedModule, MatDatepickerModule, MatNativeDateModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
