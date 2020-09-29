import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { IterfaceViewComponent } from './iterface-view.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthServiceService } from 'src/app/client/auth-service.service';
import {RouterTestingModule} from '@angular/router/testing'
describe('IterfaceViewComponent', () => {
  let component: IterfaceViewComponent;
  let fixture: ComponentFixture<IterfaceViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IterfaceViewComponent ],imports:[HttpClientTestingModule,BrowserDynamicTestingModule,RouterTestingModule],
      providers:[AuthServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterfaceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
