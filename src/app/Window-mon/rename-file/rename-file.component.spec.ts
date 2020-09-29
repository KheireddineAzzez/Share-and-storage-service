import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { modules } from 'src/app/app.module';
import { AuthServiceService } from 'src/app/client/auth-service.service';
import { WinService } from '../win.service';

import { RenameFileComponent } from './rename-file.component';

describe('RenameFileComponent', () => {
  let component: RenameFileComponent;
  let fixture: ComponentFixture<RenameFileComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenameFileComponent ] ,
       imports:[RouterTestingModule,modules],

  providers: [
    {
      provide: MatDialogRef,
      useValue: mockDialogRef
    }  ,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
         ],    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
