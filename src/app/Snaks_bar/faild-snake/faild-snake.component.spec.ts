import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { modules } from 'src/app/app.module';

import { FaildSnakeComponent } from './faild-snake.component';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
describe('FaildSnakeComponent', () => {
  let component: FaildSnakeComponent;
  let fixture: ComponentFixture<FaildSnakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaildSnakeComponent ],
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
    fixture = TestBed.createComponent(FaildSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
