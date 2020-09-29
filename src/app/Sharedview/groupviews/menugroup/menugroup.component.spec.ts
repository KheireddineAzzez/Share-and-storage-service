import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenugroupComponent } from './menugroup.component';

describe('MenugroupComponent', () => {
  let component: MenugroupComponent;
  let fixture: ComponentFixture<MenugroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenugroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenugroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
