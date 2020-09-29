import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuacessComponent } from './menuacess.component';

describe('MenuacessComponent', () => {
  let component: MenuacessComponent;
  let fixture: ComponentFixture<MenuacessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuacessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuacessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
