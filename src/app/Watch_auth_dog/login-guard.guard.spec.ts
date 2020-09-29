import { TestBed } from '@angular/core/testing';

import { LoginGuardGuard } from './login-guard.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { modules } from '../app.module';
import { ServiceclientService } from '../client/serviceclient.service';
describe('LoginGuardGuard', () => {
  let guard: LoginGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
  imports:[HttpClientTestingModule,modules]     ,
   providers:[ServiceclientService]


    });
    guard = TestBed.inject(LoginGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
