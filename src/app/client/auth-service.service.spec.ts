import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthServiceService } from './auth-service.service';
import { HttpClientTestingModule} from '@angular/common/http/testing'
import { modules } from '../app.module';
import { MatDialogRef } from '@angular/material/dialog';
describe('AuthServiceService', () => {
  let service: AuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule,modules],
      providers: [
    {provide: MatDialogRef, useValue: {}},

      ]

    });
    service = TestBed.inject(AuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
