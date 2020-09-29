
  import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { user_class } from '../models/user_model';
import * as jwt from 'jsonwebtoken'
import { ActivatedRoute, Router } from '@angular/router';
import { WinService } from '../Window-mon/win.service';
import { ServiceclientService } from './serviceclient.service';

export interface user_info{
user_id:string;
email:string;
}
/**
  *
  * @class Authentification Class
  */
@Injectable({
providedIn: 'root'
})


export class AuthServiceService {

constructor(private http:HttpClient,private router:Router,private win:WinService) { }

/**
 *
 *@description This method ensured the authentification and identification depend on the 2 factors (email , password )
 * @param email {string} email of user
 * @param password {string} password of user
 * @param email_message_error error email not found
 * @param password_message_error error password
 * @param error_auth
 * @param error_password
 */
login_account(email:string,password:string="",email_message_error:string,password_message_error:string,error_auth:boolean,error_password:boolean){
let  message:{email_message_error:string,error_password:string,password_message_error:string}
return  this.http.post("http://localhost:3000/user/login",{email:email,password:password}).toPromise().then((data)=>{
if(data['token']){
this.set_token(data['token'])
this.router.navigate(['Userprofile/Files/acceuil'])

}
else{
if((data["message"]+"").includes("Password")){
email_message_error=""
error_password=data["value"]
password_message_error=data["message"]

}else{
password_message_error=""
error_auth=true
error_auth=data["value"]
email_message_error=data['message']

}}



return {email_message_error:email_message_error,error_password:error_password,password_message_error:password_message_error,

error_auth :error_auth}

})

}
/**
 * @description Create a new user
 * @param user User that will be created
 */
create_acccount(user:user_class){
this.http.post("http://localhost:3000/user/createaccount",user).toPromise().then((data)=>{
this.set_token(data["Token"])
this.router.navigate(['/Userprofile/Files/acceuil'])


}).catch((err)=>{
this.win.open_snak_error({message:err.message,image:"https://img.icons8.com/dusk/45/000000/unverified-account.png"})
})


}
/**
 * @description save the token
 * @param Token{String} Token of the user
 */
set_token(Token:string){
console.log(Token)
localStorage.setItem('Token',Token)
let user_inf=jwt.decode(Token) as user_info
localStorage.setItem('id',user_inf.user_id);
this.router.navigate(['/Userprofile/Files/acceuil'])
}
/**
 * @description Return the token
 * @return {String}
 */
get_token(){

return  window.localStorage.getItem('Token')
}

get_user_info(){
return   jwt.decode( localStorage.getItem('Token')) as user_info
}
get_user_data(){
  let user=new Object() as user_info
  user.user_id=""

let params=new HttpParams().set("id",user.user_id+"");

return this.http.get("http://localhost:3000/user/user_info",{params:params}).toPromise()


}
/**
 * @description This method ensure the logout of user
 */
log_out(){

localStorage.removeItem("Token") ;
localStorage.removeItem('id');
}


 get_token_admition(){
 return     this.http.get("http://localhost:3000/user/tokenverification").toPromise()
 }

}
