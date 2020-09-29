import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { group } from 'src/app/models/Group_access';
import { GroupnameComponent } from 'src/app/Window-mon/group/groupname/groupname.component';
import { WinService } from 'src/app/Window-mon/win.service';

@Component({
  selector: 'app-menugroup',
  templateUrl: './menugroup.component.html',
  styleUrls: ['./menugroup.component.css']
})
export class MenugroupComponent implements OnInit {

  constructor(private service :ServiceclientService, private win:WinService) { }
@Input() group:group

@Output() event_delete=new EventEmitter<group>()
  ngOnInit(): void {

  }

  removegroup(){
 console.log(this.group.group_id+"dddddddd")
     this.service.delete_group(this.group.group_id)
   this.event_delete.emit(this.group)
    }
    rename_group(){

       this.win.open_ziper_files(GroupnameComponent,{group:this.group}).afterClosed().subscribe((data:boolean)=>{
         if(data){
        this.win.open_success_snake({message:' Successfly name update',image:'/assets/images/imagegroup.png'})
         }
       })
    }
}
