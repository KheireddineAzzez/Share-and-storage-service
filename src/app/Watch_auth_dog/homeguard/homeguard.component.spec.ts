import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeguardComponent } from './homeguard.component';

describe('HomeguardComponent', () => {
  let component: HomeguardComponent;
  let fixture: ComponentFixture<HomeguardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeguardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
