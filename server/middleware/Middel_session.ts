import  jwt from 'jsonwebtoken';
import  session from 'express-session'
import {Foldershare} from '../../src/app/models/foldershare'
import {token_access_folder,token_user} from '../Interfaces/Token_interface'
import { userInfo } from 'os';
import { token } from 'morgan';
import { person_accept_invitation } from '../database_AWs/Mongo_shared_functions';
/**
 * @description Middleware for user token
 */
export const Verified_authorization= (req,res,next)=>{
try{
if(!req.headers.authorization){
res.status(401).send({message:'error',value:false})
}
else{
jwt.verify((req.headers.authorization+"").split(' ')[1],"secret")
next()
}

}catch(ex){
res.status(401).json({message:"error",value:false})}
}


/**
 * @description Middleware for user access file
 */
export const Verified_access_folder=async (req,res,nex)=>{

try{
const _Token_folder_access=req.body.token
console.log(_Token_folder_access+"kkkkkkkkkk")
const _user_info=(jwt.decode((req.headers.authorization+"").split(' ')[1]) as token_user)


const folder_data_access=jwt.verify(_Token_folder_access,"secret") as token_access_folder

if(_user_info.user_id==folder_data_access._Data_req_body._owner){
  nex()

}
else if(folder_data_access._Data_req_body._classification=="public"){
  nex()
}
else if(folder_data_access._Data_req_body._classification=="private"){
  console.log(folder_data_access._Data_req_body._authorization_emails)
  if(!folder_data_access._Data_req_body._authorization_emails.includes(_user_info.email)){

    return res.status(406).json({message:"error 2",value:false})

  }
  else{
 return   await  person_accept_invitation(folder_data_access._Data_req_body.group_id,_user_info.email,folder_data_access._Data_req_body._owner).then(()=>{
    nex()

   })
    }
 }
else {
nex()}
}
catch(err){

res.status(401).json({message:"Access not recognised"})
}


}
