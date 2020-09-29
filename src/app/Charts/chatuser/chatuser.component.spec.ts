import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/client/auth-service.service';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { user_class } from 'src/app/models/user_model';
import { ChartDataSets, ChartOptions,LinearScale ,Chart ,ChartLineOptions} from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { read } from 'server/models/read';
import { write } from 'server/models/write';
import { ChatuserComponent } from './chatuser.component';
import { RouterTestingModule } from '@angular/router/testing';
import { modules } from 'src/app/app.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ChatuserComponent', () => {
  let component: ChatuserComponent;
  let fixture: ComponentFixture<ChatuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatuserComponent ],
      imports:[modules,HttpClientTestingModule]
      ,
      providers:[ServiceclientService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
