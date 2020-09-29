import { TestBed } from '@angular/core/testing';

import { HomewatchGuard } from './homewatch.guard';
import {RouterTestingModule} from '@angular/router/testing'
describe('HomewatchGuard', () => {
  let guard: HomewatchGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({

      imports:[RouterTestingModule]
    });
    guard = TestBed.inject(HomewatchGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
