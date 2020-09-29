import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSharedFolderComponent } from './create-shared-folder.component';

describe('CreateSharedFolderComponent', () => {
  let component: CreateSharedFolderComponent;
  let fixture: ComponentFixture<CreateSharedFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSharedFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSharedFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
