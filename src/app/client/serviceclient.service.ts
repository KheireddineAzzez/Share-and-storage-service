import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Foldermodel } from '../models/foldermodel';
import { Foldershare } from '../models/foldershare';

import { Filemodel } from '../models/filemodel';
import { WinService } from '../Window-mon/win.service';
import { imagedata } from '../Window-mon/files-upload/files-upload.component';
import { Image_aws } from 'Interfaces/Data_interfaces';
import { email_sender } from '../../../server/Interfaces/email_';
import { AuthServiceService } from './auth-service.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import * as io from 'socket.io-client'
import { Observable, Subscriber } from 'rxjs';
import * as  ziped from 'adm-zip'
import {write} from '../../../server/models/write'
import {read} from '../../../server/models/read'
import {group_iterface} from '../../../server/Interfaces/group_interface'
import { user_class } from '../models/user_model';
/**
 *  @class @type{ServiceclientService} This class is responsible for and ensures the transmission and reception of the request and the socket.io event
 *
 */
@Injectable({
providedIn: 'root'
})
export class ServiceclientService {
httpara :HttpParams  /** * @type {HttpParams} */



socket=io('http://localhost:3000') /** *Socket.io listening path */
/**
*
* @param http {HttpClient} Http request handler
* @param win {WinService} Service to show the snack bar common errors of requests
* @param auth_serv {AuthServiceService} Authentification Service
*
*/
constructor(private http:HttpClient,private win:WinService,private auth_serv:AuthServiceService) {
this.socket=io('http://localhost:3000')
this.id=localStorage.getItem('id')

}



id
/**
 *
 *
 * @param prefix {String} prefix for the path
 * @param del  {String} delimeter
 *@returns  {Promise<Filemodel[]>}  the response of the request
*/
get_bucket_data(path:string,prefix:string="",del:string=""){
let _params=new HttpParams()
.set("prefix",prefix)
.set("del",del)
return  this.http.get<Filemodel[]>("http://localhost:3000/user/get_buckets_data",{params:_params})
}
 /**
  *
  * @param prefix {String} the prefix of the folder that will be created
  * @returns  {Promise}  the response of the request
  */
create_folder(prefix:string=""){
return  this.http.post("http://localhost:3000/user/createfolder",{foldername:prefix}).toPromise()
}

 /**
  *@description verified the existance of the folder that will be create in the future
  * @param prefix
  * @param file
  * @returns {Promise<JSON>} value @type{Boolean}
  */
Verifier_object_exist(prefix:string="",file:boolean=false){
if (file){
return  this.http.post("http://localhost:3000/user/verifyfolder",{foldername:prefix}).toPromise()

}
return  this.http.post("http://localhost:3000/user/verifyfolder",{foldername:prefix+"/"}).toPromise()

}
/**
  *@description Upload File to specific path
  * @param prefix {String} prefix of  file
  * @param File_data_format {imagedata[]}
  * @returns {Promise<JSON>}
  */
upload_file(File_data_format:imagedata[],path:string){
let data=new Array<{aws_data:Image_aws}>()

File_data_format.forEach(elem=>{
data.push({aws_data:{data:elem.path,name:path+elem.file_name,type:elem.type,buket_name:""}})

})
return this.http.post('http://localhost:3000/image/upload',data).toPromise();

}
 /**
  * @description Generate a download link
  * @param prefix {string} the prefix of file
  * @returns {Promise<String>} the file Download Link
  */
get_link(prefix:string){
let params=new HttpParams().set("prefix",prefix)

return this.http.get('http://localhost:3000/image/fileLink',{params:params}).toPromise();

}
 /**
  *@description Generate an expire download link
  * @param prefix  {String} prefix of file
  * @param expire_date  {Number} expire date in milliseconde
  * @returns {Promise<String>} the file expire Download  Link
  */
get_expire_link(prefix:string,expire_date:number){
let params=new HttpParams().set("prefix",prefix).set("bucket_name",this.id).set('expiretime',expire_date+"")

return this.http.get('http://localhost:3000/image/fileexpirelink',{params:params}).toPromise();

}
/**
 *@description This method sends you a file link to a corresponding user group
 * @param emails {email_sender} Emails senders
 * @returns {MatSnackBar} status of the request to the mailer
 */
send_email(emails:email_sender){
console.log(emails)
this.http.post('http://localhost:3000/user/sendmail',emails).toPromise().then(()=>{
this.win.open_success_snake({message:"Successfully sent ",image:"https://img.icons8.com/clouds/50/000000/cloud-mail.png"})
}).catch((err)=>{
this.win.open_snak_error({message:" Please Check your Emails ! ",image:"https://img.icons8.com/fluent/48/000000/important-mail.png"})


})


}
 /**
  *@description Delete A file or  a Folder
  * @param Files {Filemodel[]} The files that will be deleted
  * @returns {MatSnackBar} Status of response
  */
Delete_objects(Files:Filemodel[]){
let id=this.auth_serv.get_user_info().user_id;
return this.http.post("http://localhost:3000/user/Deletefiles",{Files:Files}).toPromise().then((data:{message:string})=>{

this.win.open_success_snake({message:data.message,image:'https://img.icons8.com/plasticine/50/000000/delete-forever.png'})
});
}
/**
 *@description This method allows to rename a file or to copied
 * @param data{JSON} contains the old_name of the file and the new_name of the file
 */
File_cpoy(data:{oldkey:string,newkey:string}){
this.http.post("http://localhost:3000/user/renamefile",{bucket_name:this.id,oldkey:data.oldkey,newkey:data.newkey})
.toPromise().then(()=>{
})

}
 /**
  * @description this method allows connection to socket.io
  * @param id id of user
  * @return {Observable}
  */
switch_to_real_data(id :string=""){

this.socket.emit("switchtorealtime",{
id:this.id
})
}
listen_to_real_data(){
return new Observable((sub:Subscriber<{general_path:string,data:Foldermodel[]}>)=>{
this.socket.on('get_bucket_list',(data:{general_path:string,data:Foldermodel[]})=>{
sub.next(data)
})
})
}

/**
 *
 * @param Files {Filemodel[]} The Zipped files
 * @param file_name {String} the name of zip file
  */
upload_file_zip(Files:Array<Foldermodel>,file_name:Filemodel){

return  this.http.post('http://localhost:3000/user/zipedfiles',{bucket_name:this.id,fileskey:Files,file:file_name}).toPromise()
}

/**
 * @description This method returns the data to display the chart
 * @returns {Array<Action>} Action could be a write action or read
 */
get_chart_static(){
let param:HttpParams=new HttpParams().set('id',this.id)
return this.http.get<        {chart_write: Array<write>,chart_read:  Array<read> }>('http://localhost:3000/user/chart_user',{params:param}).toPromise()
}

 /**
  * @description connect to socket.io to receive real-time chart data
  * @return {Observable}
  */
get_chart_data(){
return new Observable((sub:Subscriber<{chart_write:Array<write>,chart_read:Array<read>}>)=>{
this.socket.on('get_chart_data',(data:{chart_write:Array<write>,chart_read:Array<read>})=>{

sub.next(data)
})
})
}

Generate_access_folder_link(folder:Foldershare){
  return this.http.post('http://localhost:3000/image/Accesslink',{folder:folder}).toPromise()

}
get_groups(){
   return this.http.get<group_iterface>('http://localhost:3000/user/groups')
}
get_others_users_basic_info(email:string){
  let param:HttpParams=new HttpParams().set('email',email)

  return this.http.get<user_class>('http://localhost:3000/user/userbyemail',{params:param})

}
user_exist(email:string){
  let param:HttpParams=new HttpParams().set('email',email)

  return this.http.get<{data:boolean}> ('http://localhost:3000/user/userexist',{params:param})


}
delete_group(groupid){

return   this.http.post<{message:string}>('http://localhost:3000/user/deletegroup',{groupid:groupid}).toPromise().then((data)=>{

   this.win.open_success_snake({message:data.message,image:'https://img.icons8.com/plasticine/50/000000/delete-forever.png'})
  })
}
check_group_exist(groupname:string){
  let param:HttpParams=new HttpParams().set('groupname',groupname)

  return this.http.get<{data:boolean}>('http://localhost:3000/user/groupexist',{params:param}).toPromise()

}
rename_group(group_name:string,group_id:string){
  return this.http.post('http://localhost:3000/user/renamegroup',{groupid:group_id,groupname:group_name}).toPromise()

 }
}
