import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthServiceService } from 'src/app/client/auth-service.service';
import {RouterTestingModule} from '@angular/router/testing'
import { CreateaccountComponent } from './createaccount.component';
import { modules } from 'src/app/app.module';
import { FormsModule } from '@angular/forms';

describe('CreateaccountComponent', () => {
  let component: CreateaccountComponent;
  let fixture: ComponentFixture<CreateaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateaccountComponent ] ,
      imports:[HttpClientTestingModule,RouterTestingModule,FormsModule]
      ,providers:[AuthServiceService,modules]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
