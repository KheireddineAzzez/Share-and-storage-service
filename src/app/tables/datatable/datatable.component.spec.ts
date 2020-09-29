import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableComponent } from './datatable.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import {RouterTestingModule} from '@angular/router/testing'
import { modules } from 'src/app/app.module';

describe('DatatableComponent', () => {
  let component: DatatableComponent;
  let fixture: ComponentFixture<DatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatableComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule,modules],
      providers:[ServiceclientService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
