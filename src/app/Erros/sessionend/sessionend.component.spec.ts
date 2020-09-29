import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionendComponent } from './sessionend.component';

describe('SessionendComponent', () => {
  let component: SessionendComponent;
  let fixture: ComponentFixture<SessionendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
