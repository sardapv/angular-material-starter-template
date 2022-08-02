import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

let component: ComponentFixture<AppComponent>;

beforeEach(() => {
  TestBed.configureTestingModule({ declarations: [AppComponent], schemas: [NO_ERRORS_SCHEMA] });
});

it('should create', () => {
  component = TestBed.createComponent(AppComponent);
  expect(component).toBeTruthy();
});
