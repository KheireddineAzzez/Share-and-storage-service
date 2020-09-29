import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicviewComponent } from './publicview.component';

describe('PublicviewComponent', () => {
  let component: PublicviewComponent;
  let fixture: ComponentFixture<PublicviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
