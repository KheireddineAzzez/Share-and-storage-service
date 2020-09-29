import { TestBed } from '@angular/core/testing';

import { ServiceclientService } from './serviceclient.service';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { WinService } from '../Window-mon/win.service';
import {RouterTestingModule} from '@angular/router/testing'
import { modules } from '../app.module';
describe('ServiceclientService', () => {
  let service: ServiceclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports:[RouterTestingModule,HttpClientTestingModule,modules],
providers:[WinService]



    });
    service = TestBed.inject(ServiceclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
