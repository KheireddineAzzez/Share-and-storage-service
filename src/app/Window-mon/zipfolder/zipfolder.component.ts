import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceclientService } from 'src/app/client/serviceclient.service';

@Component({
  selector: 'app-zipfolder',
  templateUrl: './zipfolder.component.html',
  styleUrls: ['./zipfolder.component.css']
})
export class ZipfolderComponent implements OnInit {
valid=false;
  constructor(public dialogRef: MatDialogRef<ZipfolderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,private serve:ServiceclientService)  { }

  ngOnInit(): void {
  }
click_create(){

  this.dialogRef.close(this.data)

}
 tex_change(){
    this.serve.Verifier_object_exist('recent/'+this.data).then(data=>{
 this.valid= data['value']
 console.log(data['value']  )
     })

 }
}
