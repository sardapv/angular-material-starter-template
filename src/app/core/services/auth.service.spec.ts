import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';

let service: AuthService;

beforeEach(() => {
  TestBed.configureTestingModule({ providers: [AuthService], imports: [HttpClientTestingModule] });
});

it('should create', () => {
  service = TestBed.inject(AuthService);
  expect(service).toBeTruthy();
});
