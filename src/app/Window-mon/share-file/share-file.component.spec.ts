import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { modules } from 'src/app/app.module';
import { AuthServiceService } from 'src/app/client/auth-service.service';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { WinService } from '../win.service';


import { ShareFileComponent } from './share-file.component';

describe('ShareFileComponent', () => {
  let component: ShareFileComponent;
  let fixture: ComponentFixture<ShareFileComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareFileComponent ],
      imports: [MatDialogModule,modules ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef
        }  ,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]

    })
    TestBed.overrideModule(BrowserDynamicTestingModule,{
      set:{ entryComponents:[ShareFileComponent]}
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
