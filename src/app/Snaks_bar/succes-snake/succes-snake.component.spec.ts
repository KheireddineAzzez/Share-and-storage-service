import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { modules } from 'src/app/app.module';

import { SuccesSnakeComponent } from './succes-snake.component';

describe('SuccesSnakeComponent', () => {
  let component: SuccesSnakeComponent;
  let fixture: ComponentFixture<SuccesSnakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesSnakeComponent ]  ,
      imports:[modules],
      providers: [{
        provide: MatSnackBarRef,
        useValue: {}
        }, {
        provide: MAT_SNACK_BAR_DATA,
        useValue: {} // Add any data you wish to test if it is passed/used correctly
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
