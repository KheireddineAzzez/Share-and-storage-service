import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
selector: 'app-nav',
templateUrl: './nav.component.html',
styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
drawer_opne:boolean=false
@Input() Menu_hide:boolean=false;
constructor() { }
@Output() hide_side_nav = new EventEmitter<boolean>();
ngOnInit(): void {
}
open_drawer(){
this.drawer_opne=!this.drawer_opne

this.hide_side_nav.emit(this.drawer_opne)
}
}
