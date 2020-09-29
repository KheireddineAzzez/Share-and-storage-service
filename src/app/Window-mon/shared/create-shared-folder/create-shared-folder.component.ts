import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceshareService } from 'src/app/Access/serviceshare.service';
import { Folder_creation } from 'src/app/user/files/nav-files/nav-files.component';

@Component({
  selector: 'app-create-shared-folder',
  templateUrl: './create-shared-folder.component.html',
  styleUrls: ['./create-shared-folder.component.css']
})
export class CreateSharedFolderComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreateSharedFolderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {folderc:Folder_creation,token:string},private ser:ServiceshareService) { }
  folder_name:string=""
  error_message:string=""
  error_:boolean=true
    ngOnInit(): void {
      console.log()
    }
  close_(){
    this.data.folderc.folder_name=this.folder_name
     this.dialogRef.close(this.data);

  }
  cancel_(){
    this.data.folderc.accepted=false
    this.dialogRef.close(this.data);

  }
  change_text_verification(){
    console.log("done")
    if(this.folder_name.length>=4){
      console.log(this.data.folderc.path+"ddddddd"+this.folder_name)
  this.ser.Verifier_object_exist((this.data.folderc.path+this.folder_name),this.data.token).then((data)=>{
    console.log(data['value'])
    this.data.folderc.accepted=data["value"]
    this.error_=data["value"]
  })
  }}


}
