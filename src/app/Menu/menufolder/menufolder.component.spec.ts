import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenufolderComponent } from './menufolder.component';

describe('MenufolderComponent', () => {
  let component: MenufolderComponent;
  let fixture: ComponentFixture<MenufolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenufolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenufolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
