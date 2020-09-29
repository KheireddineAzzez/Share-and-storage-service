import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { group } from 'src/app/models/Group_access';

@Component({
  selector: 'app-publicview',
  templateUrl: './publicview.component.html',
  styleUrls: ['./publicview.component.css']
})
export class PublicviewComponent implements OnInit {
@Input() event =new   EventEmitter()
@Input() group:Array<group>
  constructor() { }
 grou_public =new Array<group>()
  ngOnInit(): void {
    this.event.subscribe((data )=>{
     console.log(data)
    })
  }

}
