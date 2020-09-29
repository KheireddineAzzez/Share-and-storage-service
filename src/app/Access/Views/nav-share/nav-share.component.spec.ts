import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavShareComponent } from './nav-share.component';

describe('NavShareComponent', () => {
  let component: NavShareComponent;
  let fixture: ComponentFixture<NavShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
