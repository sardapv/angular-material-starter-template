import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScamComponent } from './scam.component';

describe('ScamComponent', () => {
  let component: ScamComponent;
  let fixture: ComponentFixture<ScamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
