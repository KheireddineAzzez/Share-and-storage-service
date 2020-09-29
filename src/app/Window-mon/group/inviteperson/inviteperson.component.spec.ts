import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitepersonComponent } from './inviteperson.component';

describe('InvitepersonComponent', () => {
  let component: InvitepersonComponent;
  let fixture: ComponentFixture<InvitepersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitepersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitepersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
