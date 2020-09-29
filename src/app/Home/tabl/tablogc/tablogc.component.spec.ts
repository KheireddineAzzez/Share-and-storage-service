import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablogcComponent } from './tablogc.component';

describe('TablogcComponent', () => {
  let component: TablogcComponent;
  let fixture: ComponentFixture<TablogcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablogcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablogcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
