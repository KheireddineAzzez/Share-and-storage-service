import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { modules } from 'src/app/app.module';

import { NavFilesComponent } from './nav-files.component';

describe('NavFilesComponent', () => {
  let component: NavFilesComponent;
  let fixture: ComponentFixture<NavFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavFilesComponent ]
      ,
      imports:[modules]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
