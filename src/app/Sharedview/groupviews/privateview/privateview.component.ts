import { Component, Input, OnInit } from '@angular/core';
import { group } from 'src/app/models/Group_access';

@Component({
  selector: 'app-privateview',
  templateUrl: './privateview.component.html',
  styleUrls: ['./privateview.component.css']
})
export class PrivateviewComponent implements OnInit {
  @Input()group:Array<group>

  constructor() { }

  ngOnInit(): void {
    console.log(this.group.reverse())
  }
remover_group(_group:group){
let group_id=_group.group_id;
 let index=this.group.indexOf(_group);
 this.group.splice(index,1)
}
rename_group(_group:group){
  let group_id=_group.group_id;
  let index=this.group.indexOf(_group);
}
}
