import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardgroupviewComponent } from './cardgroupview.component';

describe('CardgroupviewComponent', () => {
  let component: CardgroupviewComponent;
  let fixture: ComponentFixture<CardgroupviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardgroupviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardgroupviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
