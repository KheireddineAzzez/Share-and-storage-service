import { Component, OnInit } from '@angular/core';
import { WinService } from 'src/app/Window-mon/win.service';

@Component({
selector: 'app-home',
templateUrl: './home.component.html',
styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private win:WinService) { }
drawer_open:boolean=false;

ngOnInit(): void {
}
redirect_createaccount(){
  this.win.create_account()
}
openside($event){
this.drawer_open=$event
}
}
