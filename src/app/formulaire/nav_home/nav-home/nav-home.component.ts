import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {
  drawer_opne:boolean=false
  @Output() hide_side_nav = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  open_drawer(){
    this.drawer_opne=!this.drawer_opne

    this.hide_side_nav.emit(this.drawer_opne)
  }

}
