import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { Folder_creation } from 'src/app/user/files/nav-files/nav-files.component';

@Component({
  selector: 'app-create-folder',
  templateUrl: './create-folder.component.html',
  styleUrls: ['./create-folder.component.css']
})
export class CreateFolderComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateFolderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Folder_creation,private ser:ServiceclientService) { }
folder_name:string=""
error_message:string=""
error_:boolean=true
  ngOnInit(): void {
    console.log()
  }
close_(){
  this.data.folder_name=this.folder_name
   this.dialogRef.close(this.data);

}
cancel_(){
  this.data.accepted=false
  this.dialogRef.close(this.data);

}
change_text_verification(){
  console.log("done")
  if(this.folder_name.length>=4){
this.ser.Verifier_object_exist(this.data.path+this.folder_name).then((data)=>{
  console.log(data['value'])
  this.data.accepted=data["value"]
  this.error_=data["value"]
})
}}
}
