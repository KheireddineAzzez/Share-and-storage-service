import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { modules } from 'src/app/app.module';

import { ShipsEmailComponent } from './ships-email.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ServiceclientService } from 'src/app/client/serviceclient.service';
describe('ShipsEmailComponent', () => {
  let component: ShipsEmailComponent;
  let fixture: ComponentFixture<ShipsEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipsEmailComponent ],
      imports:[modules,HttpClientTestingModule],
      providers:[ServiceclientService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
