import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { modules } from 'src/app/app.module';
import { WinService } from '../win.service';

import { LinkFileComponent } from './link-file.component';

describe('LinkFileComponent', () => {
  let component: LinkFileComponent;
  let fixture: ComponentFixture<LinkFileComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkFileComponent ]  ,
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
    fixture = TestBed.createComponent(LinkFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
