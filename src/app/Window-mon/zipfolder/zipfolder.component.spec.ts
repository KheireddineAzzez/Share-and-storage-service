import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { modules } from 'src/app/app.module';

import { ZipfolderComponent } from './zipfolder.component';

describe('ZipfolderComponent', () => {
  let component: ZipfolderComponent;
  let fixture: ComponentFixture<ZipfolderComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipfolderComponent ],
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
    fixture = TestBed.createComponent(ZipfolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
