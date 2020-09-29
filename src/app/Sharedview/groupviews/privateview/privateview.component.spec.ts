import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateviewComponent } from './privateview.component';

describe('PrivateviewComponent', () => {
  let component: PrivateviewComponent;
  let fixture: ComponentFixture<PrivateviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
