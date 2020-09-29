import { Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { modules } from 'src/app/app.module';
import { WinService } from 'src/app/Window-mon/win.service';

import { MenuFileComponent } from './menu-file.component';

describe('MenuFileComponent', () => {
  let component: MenuFileComponent;
  let fixture: ComponentFixture<MenuFileComponent>;
  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFileComponent ]  ,


      imports:[RouterTestingModule,modules ]
  ,providers:[
    {
      provide: MatDialogRef,
      useValue: mockDialogRef
    }  ,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
   ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
