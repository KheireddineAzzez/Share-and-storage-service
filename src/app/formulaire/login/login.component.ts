import { Component, OnInit } from '@angular/core';
import { WinService } from 'src/app/Window-mon/win.service';
import { AuthServiceService, user_info } from 'src/app/client/auth-service.service';
import { Router } from '@angular/router';
import  {decode} from 'jsonwebtoken'
@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Email:string="";
password:string=""
hide = true;//hide side bar
email_message_error="";
password_message_error="";
error_auth:boolean=false
error_password:boolean=false

/**
 *
 * @param win {WinService}  Service to show a snack bar contains the following errors
 * @param Authser {AuthServiceService}
 */
constructor(private win:WinService,private Authser:AuthServiceService) { }

ngOnInit(): void {
}


/**
 * @description This method allows the client to verify two-factor authentication (Email,password)
 */
login(){

this.Authser.login_account(this.Email,this.password,this.email_message_error,
this.password_message_error,this.error_auth,this.error_password).then((data)=>{
console.log(data)

this.password_message_error=data.password_message_error;this.error_auth=data.error_auth;

this.email_message_error=data.email_message_error
this.error_password=data.error_password
})


}
}

