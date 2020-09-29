import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupnameComponent } from './groupname.component';

describe('GroupnameComponent', () => {
  let component: GroupnameComponent;
  let fixture: ComponentFixture<GroupnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
