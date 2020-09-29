
import bcrypt from 'bcrypt'
import {User} from '../models/user'
import jwt from 'jsonwebtoken'
import { mongo } from 'mongoose'
import { upload_to_aws } from '../database_AWs/User_action_aws'
import {token_user} from '../Interfaces/Token_interface'
import { user_class } from '../../src/app/models/user_model'
import { group } from '../../src/app/models/Group_access'
import {groupmodel} from '../models/Group_model'
import {destroygroup, get_all_groups, rename_group_user} from '../database_AWs/Mongo_shared_functions'
import { read} from '../models/read'
import { write} from '../models/write'
import { send_mail_inviation } from '../database_AWs/Node_mailer'
import { email_send_invitation_group } from '../Interfaces/email_invitaion_interface'
/**
* Esnsure the storage of Data by Aws
*/
const model =new upload_to_aws("","",null);

/**
* This method allows and ensures authentication and identification
* @param req request from the user
* @param res response to the user
* @param next
* @returns (Json || error )on the state of the entries in the user-generated request that contains the two authentication factors(login,password)
*/


export function login (req,res,next){
User.find({email:req.body.email}).exec().then((data)=>{
if(data.length<1){
res.status(200).json({
message:"Email not found",
value:false
})

}
else{
bcrypt.compare(req.body.password,data[0].get('password')).then((password_coorect)=>{
if(password_coorect){
const token=     jwt.sign({
email:req.body.email,
user_id:data[0]._id
},"secret",{
expiresIn:'1h'
})
req.session.token=token
res.status(200).json({token})
}
else{
res.status(200).json({
message:"Password  faild",value:false
})
}
})}})}

/**
* This method allows to create new account
* @param req request from the user
* @param res response to the user
* @param next
* @returns (Json || error )on the state of the entries in the user-generated request that contains the two authentication factors(login,password)
*/

export async function createaccount(req,res,next){
await  User.find({email:req.body.email}).exec().then((data)=>{
if(data.length>=1){
res.status(401).json({message:'error email exist'})
}
else{
const _password_crypted=bcrypt.hash(req.body.password,10).then(_cypted_pass=>{
let  id_image =(new mongo.ObjectId())
const user =new User({
_id:new mongo.ObjectId(),
email:req.body.email,
password:_cypted_pass,
age:new Date(),
sexe:req.body.sexe,
username:req.body.user_name,
image:id_image
}).save().then(async (_current_user)=>{
await  model.create_bucket(_current_user._id+"").then(()=>{
let mode=new upload_to_aws(_current_user.id,"",[{aws_data:{data:req.body.image,name:_current_user._id+"/"+id_image+'.png',type:'',buket_name:"usersprofile"}}])
mode.upload_image(_current_user._id,null)
})
return _current_user
}).then(async (_current_user)=>{
var token= jwt.sign({email:req.body.email,user_id:_current_user._id},'secret',{expiresIn:'1h'})
res.status(200).json({
message:'user_added',
value: true,data:user,Token:token
})
})
})
}
})
}
/**
* This method allows the user info
* @param req request from the user
* @param res response to the user
* @param next
* @returns the basic user info
*/

export function get_user_info(req,res,next){
let _User_token_data=Get_token_parametre((req.headers.authorization+"").split(' ')[1])
let id:string=_User_token_data.user_id
User.findById(id).exec().then((user)=>{
let _User_=user  as user_class
model.get_object_link('usersprofile',`${_User_._id}/${_User_.image}.png`).then((data)=>{
_User_.image=data
res.status(200).json(user)})})}
/**
*
* @param req
* @param res
* @param nex
*/
export async function get_other_user_info_by_email(req,res,nex){
await User.findOne({email:req.query.email}).exec().then(async (user)=>{
let _User_=user  as user_class
_User_.user_name=user.get('username')

await   model.get_object_link('usersprofile',`${_User_._id}/${_User_.image}.png`).then((data)=>{
let user=new user_class();
user._id=_User_._id;
user.image=data
user.user_name=_User_.user_name
user.email=_User_.email
res.status(200).json(user)
})
}).catch(err=>{
  res.status(200).json(err)
})
}

export async function get_all_group(req,res,nex){
let _User_token_data=Get_token_parametre((req.headers.authorization+"").split(' ')[1])
let id=_User_token_data.user_id
await get_all_groups(id).then((data)=>{
res.status(200).json(data)
})
}


/**
 *
 * @param req
 * @param res
 * @param nex
 */
export async function user_exist(req,res,nex){
 return  await User.exists({email:req.query.email}).then((data)=>{
    res.status(200).json({data:data})
  })

}


 export function removegroup(req,res,nex){
   let group_id=req.body.groupid;
   let _User_token_data=Get_token_parametre((req.headers.authorization+"").split(' ')[1])
   return destroygroup(_User_token_data.user_id,group_id).then((data)=>{

    res.status(200).json({message:data})
   })


 }

export async function group_exist(req,res,nex){
  let _User_token_data=Get_token_parametre((req.headers.authorization+"").split(' ')[1])
let groupname:string=req.query.groupname
console.log(req.query.groupname+"zzzzzzzzzzzzzzz")
  return await groupmodel.exists({_id:_User_token_data.user_id,"groups.goroup_name":groupname},(err,val)=>{
    res.status(200).json({data:val})
  })

}

export function rename_group(req,res,nex){
  let group_id=req.body.groupid
  let new_group_name=req.body.groupname;
  let _User_token_data=Get_token_parametre((req.headers.authorization+"").split(' ')[1])

 return  rename_group_user(_User_token_data.user_id,group_id,new_group_name).then((data)=>{
res.status(200).json({message:data})
 }).catch(eer=>{res.status(200).json({message:eer})})

}

export function  accept_inviation(req,res,nex){


}
 /**
  *
  * @param Token
  */
function Get_token_parametre(Token:string){
console.log(Token,"token")
var data= jwt.decode(Token) as token_user
console.log(data)
return data
}
