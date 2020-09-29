import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LinkFileComponent } from '../link-file/link-file.component';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { email_sender } from 'server/Interfaces/email_';
import { AuthServiceService } from 'src/app/client/auth-service.service';

@Component({
  selector: 'app-share-file',
  templateUrl: './share-file.component.html',
  styleUrls: ['./share-file.component.css']
})
export class ShareFileComponent implements OnInit {
  Emails=new Array<string>();
  constructor(public dialogRef: MatDialogRef<ShareFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string ,private http:HttpClient,private rout:ActivatedRoute,private ser:ServiceclientService,private auth:AuthServiceService) { }

  ngOnInit(): void {
    console.log(this.data)
  }
  envoyer(){
    let emails_send:email_sender=new Object() as email_sender;
let user_infol=this.auth.get_user_info()
    this.ser.get_link(this.data).then((url_file:{file_link:string})=>{
      emails_send.emails=this.Emails;
emails_send.url=url_file.file_link+"";
emails_send.owner='khayry'
emails_send.addition_info="dsd"
emails_send.owner=user_infol.email
this.ser.send_email(emails_send)
    })


     }}
