import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Inject, Input } from '@angular/core';
import { Component, inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthServiceService } from 'src/app/client/auth-service.service';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { Foldermodel } from 'src/app/models/foldermodel';
import { Foldershare } from 'src/app/models/foldershare';
import *as  email_valid from 'email-validator'
import { WinService } from '../win.service';
import { HttpinterceptorService } from 'src/app/client/httpinterceptor.service';

@Component({
selector: 'app-folderlinkgen',
templateUrl: './folderlinkgen.component.html',
styleUrls: ['./folderlinkgen.component.css']
})
export class FolderlinkgenComponent implements OnInit {
folder_share:Foldershare
constructor(public matdialog:MatDialogRef<FolderlinkgenComponent>,
@Inject(MAT_DIALOG_DATA) public data:Foldermodel ,private service:ServiceclientService,private auth:AuthServiceService) {
this.folder_share=new Foldershare(data.nom,data.date,data.type,"",[]);
}
readonly separatorKeysCodes: number[] = [ENTER,COMMA,SPACE];
Open_choose_date:boolean=false;
date=new Date(new Date().getTime() + (1000 * 60 * 60 * 24))
link_simple:boolean=true
Expanel:boolean=false
expire_link:string;
group_name:string=""
Expire_date:Date=new Date()
Emails= new Array<string>();
Link:string='';
erro_message:string="";
spinner_email_valid:boolean=false;

ngOnInit(): void {
this.get_folder_link()

}

get_folder_link(){
try{
this.folder_share._owner=this.auth.get_user_info().user_id
this.folder_share._classification='public'
this.folder_share.group_name=this.group_name;
this.folder_share.id=this.data.id;

this.service.Generate_access_folder_link(this.folder_share).then((data:Foldershare)=>{
this.folder_share._owner=this.auth.get_user_info().user_id
this.Link="http://localhost:4200/sharepoint/"+data._token;
console.log(data)
})
}catch(err){console.log(err)}
}

generate_expire_link(){

try{
this.folder_share._classification='private'
this.folder_share.group_name=this.group_name;
this.folder_share._authorization_emails=this.Emails
this.folder_share._owner=this.auth.get_user_info().user_id
this.folder_share.date=this.Expire_date;

this.service.Generate_access_folder_link(this.folder_share).then((data:Foldershare)=>{
this.Link="http://localhost:4200/sharepoint/"+data._token;
console.log(data)})

}
catch(err){   }
}

open_link_timer(){
this.link_simple=false
}
close_link_timer(){
this.link_simple=true

}
remove(el :string): void {
const index = this.Emails.indexOf(el);

if (index >= 0) {
this.Emails.splice(index, 1);
}
}
async add(event: MatChipInputEvent): Promise<void> {
const input = event.input;
const value = event.value;

if ((value || '').trim()) {
this.spinner_email_valid=true
await this.service.user_exist(value).toPromise().then((data)=>{
if(value==this.auth.get_user_info().email){
this.erro_message="Your are the admin of this group"
  this.spinner_email_valid=false
}
else if (this.Emails.includes(value)){
this.erro_message='Email doublication'
this.spinner_email_valid=false

}
else if(data.data){
this.Emails.push(value)
this.spinner_email_valid=false
this.erro_message=""
}

else {
this.erro_message="Email dosen't exist"
this.spinner_email_valid=false

}
})
}

// Reset the input value
if (input) {
input.value = '';
}
}

}
