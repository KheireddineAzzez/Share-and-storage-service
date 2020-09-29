import { Component, OnInit, Inject } from '@angular/core';
import { LinkFileComponent } from '../link-file/link-file.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceclientService } from 'src/app/client/serviceclient.service';

@Component({
  selector: 'app-rename-file',
  templateUrl: './rename-file.component.html',
  styleUrls: ['./rename-file.component.css']
})
export class RenameFileComponent implements OnInit {
Change_name:string=""
  constructor(public dialogRef: MatDialogRef<RenameFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,private serve:ServiceclientService) {
       let da=this.data+""
       this.Change_name=da.substring(da.lastIndexOf('/')+1,da.lastIndexOf('.'))
     }

  ngOnInit(): void {
  }
  valid_name:boolean=false
on_close(){
  this.serve.File_cpoy({oldkey:this.data,newkey:this.Change_name+this.data.substr(this.data.indexOf('.'))})
  this.dialogRef.close(this.Change_name)
}
verify_object_name(){
   this.serve.Verifier_object_exist(this.Change_name+this.data.substr(this.data.indexOf('.')),true).then((data)=>{
    this.valid_name=data["value"]

   })

}
}
