import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerchartComponent } from './controllerchart.component';

describe('ControllerchartComponent', () => {
  let component: ControllerchartComponent;
  let fixture: ComponentFixture<ControllerchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
