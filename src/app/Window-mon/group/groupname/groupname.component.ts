import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { group } from 'src/app/models/Group_access';

@Component({
  selector: 'app-groupname',
  templateUrl: './groupname.component.html',
  styleUrls: ['./groupname.component.css']
})
export class GroupnameComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<GroupnameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {group:group},private service:ServiceclientService) { }
Group_name_change:string=""
grou_name_verification:boolean=true
name_already_exist:boolean=false
  ngOnInit(): void {
  }
nex_group_name_change(){
  this.grou_name_verification=false
  console.log(this.data.group.group_id)
  this.service.check_group_exist(this.Group_name_change).then((data)=>{
    this.grou_name_verification=true
    this.name_already_exist=data.data
     console.log(data)

  })
}
  close_pop(){
    this.service.rename_group(this.Group_name_change,this.data.group.group_id).then((data)=>{
      this.data.group.goroup_name=this.Group_name_change
  this.dialogRef.close(true)
    })
  }
}
