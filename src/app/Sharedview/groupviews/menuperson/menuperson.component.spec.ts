import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupersonComponent } from './menuperson.component';

describe('MenupersonComponent', () => {
  let component: MenupersonComponent;
  let fixture: ComponentFixture<MenupersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenupersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenupersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
