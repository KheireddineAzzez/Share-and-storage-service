import { Component, OnInit,AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { group_iterface } from 'server/Interfaces/group_interface';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { group } from 'src/app/models/Group_access';

@Component({
  selector: 'app-share-groups',
  templateUrl: './share-groups.component.html',
  styleUrls: ['./share-groups.component.css']
})
export class ShareGroupsComponent implements OnInit {
Group:group_iterface
 emit_to_public=new EventEmitter()
 emit_to_private=new EventEmitter<Array<group>>()

  constructor(private srv:ServiceclientService) {

   }

  async ngOnInit(): Promise<void> {
    console.log("dsqd")
      this.srv.get_groups().subscribe((data)=>{
        console.log(data)
        this.Group=data

  })
}}
