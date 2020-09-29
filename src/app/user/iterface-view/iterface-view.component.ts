import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService, user_info } from 'src/app/client/auth-service.service';
import { user_class } from 'src/app/models/user_model';

@Component({
  selector: 'app-iterface-view',
  templateUrl: './iterface-view.component.html',
  styleUrls: ['./iterface-view.component.css']
})
export class IterfaceViewComponent implements OnInit {
rr="";
Menu_nav_hide:boolean=false;
user =new user_class();;
  constructor(private serv:AuthServiceService) {

  }
  drawer_open:boolean=false;

  ngOnInit(): void {
this.serv.get_user_data().then((data)=>{
this.user=data as user_class;
 })


  }
  openside($event){
    this.drawer_open=$event
  }
hide_nave_bar(){
   this.drawer_open=false
   this.Menu_nav_hide=true
}
}
