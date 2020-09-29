import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/client/auth-service.service';
import { WinService } from '../win.service';

import { CreateFolderComponent } from './create-folder.component';
import {RouterTestingModule} from '@angular/router/testing'
import { modules } from 'src/app/app.module';
describe('CreateFolderComponent', () => {
  let component: CreateFolderComponent;
  let fixture: ComponentFixture<CreateFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFolderComponent ],
      imports: [
        MatDialogModule,RouterTestingModule,modules
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
         WinService,
         AuthServiceService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
