import { Component, OnInit } from '@angular/core';
import {user_class} from'../../models/user_model'
import { AuthServiceService } from 'src/app/client/auth-service.service';
import   * as validator from 'email-validator'
import {NgForm} from '@angular/forms';
@Component({
selector: 'app-createaccount',
templateUrl: './createaccount.component.html',
styleUrls: ['./createaccount.component.css']
})


export class CreateaccountComponent implements OnInit {
user=new user_class();//user model
age_tab=[];
image_up:any
seconde_pass="";//seconde password
email_valid:boolean=true//email validation
 /**
  *@param serv {AuthServiceService} Authentification service
  */
constructor(private serv:AuthServiceService) {
for (let index = 15; index <=100; index++) {
this.age_tab.push(index)
}
}

ngOnInit(): void {
}
/**
 *
 * @description  This method allows to create user
 */
create_user(){
console.log(this.user)
this.serv.create_acccount(this.user)
}

/**
 * @description This method allows the profile image treatment
 * @param $event Image
 */
get_image($event){
const element = $event.target.files[0]
console.log(element)
var reader_file=new FileReader();
reader_file.readAsDataURL(element);
reader_file.onload=(eve)=>{
this.user.image=eve.target.result.toString()
}


}


check_email_validation(){
this.email_valid = validator.validate(this.user.email)

}
}

