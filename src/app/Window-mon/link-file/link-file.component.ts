import { Component, OnInit, Inject, ViewChild, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-link-file',
  templateUrl: './link-file.component.html',
  styleUrls: ['./link-file.component.css']
})
export class LinkFileComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

Link:string=""
spinner=true;
link_simple:boolean=false
Expanel:boolean=false
date=new Date()
expire_link:string;

Expire_date:Date
 Emails= new Array<string>();




  constructor(public dialogRef: MatDialogRef<LinkFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string ,private http:HttpClient,private rout:ActivatedRoute,private ser:ServiceclientService) { }

  ngOnInit(): void {
    this.get_link()
  }



generate_expirelink(){

  let dat=this.Expire_date.getTime() -(new Date()).getTime()
  var diff = Math.abs(this.Expire_date.getTime()  -(new Date()).getTime());
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
console.log()
let seconde_dif=diffDays *86400;
    this.Expanel=false

    console.log("panel closed")
   this.ser.get_expire_link(this.data,seconde_dif).then((data:{file_link:string})=>{
     console.log(data)
     this.Link=data.file_link
  })

}










get_link(){
this.ser.get_link(this.data).then((data:{file_link:string})=>{
  console.log(data)
  setTimeout(() => {
    this.Link=data.file_link
    this.spinner=false
    this.link_simple=true
  }, 1000);

})
}

 open_link_timer(){
   this.link_simple=false
 }
 close_link_timer(){
  this.link_simple=true

 }
}
