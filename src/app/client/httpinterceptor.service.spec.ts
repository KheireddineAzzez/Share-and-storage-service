import { TestBed } from '@angular/core/testing';
import { modules } from '../app.module';

import { HttpinterceptorService } from './httpinterceptor.service';

describe('HttpinterceptorService', () => {
  let service: HttpinterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports:[modules]
    });
    service = TestBed.inject(HttpinterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
