import { TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { WinService } from './win.service';

describe('WinService', () => {
  let service: WinService;

  beforeEach(() => {
    TestBed.configureTestingModule({

      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
        // ...
      ]    });
    service = TestBed.inject(WinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
