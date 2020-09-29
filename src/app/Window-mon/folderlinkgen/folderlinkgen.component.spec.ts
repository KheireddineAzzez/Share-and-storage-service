import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderlinkgenComponent } from './folderlinkgen.component';

describe('FolderlinkgenComponent', () => {
  let component: FolderlinkgenComponent;
  let fixture: ComponentFixture<FolderlinkgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderlinkgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderlinkgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
