import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareGroupsComponent } from './share-groups.component';

describe('ShareGroupsComponent', () => {
  let component: ShareGroupsComponent;
  let fixture: ComponentFixture<ShareGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
