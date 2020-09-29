import jwt from 'jsonwebtoken'
import { upload_to_aws } from '../database_AWs/User_action_aws'
import { Filemodel } from '../../src/app/models/filemodel'
import { Foldermodel } from '../../src/app/models/foldermodel'
import { token_access_folder,token_user  } from '../Interfaces/Token_interface'
import { user_sockets } from '../sockets/User_socket'
import { Image_aws } from '../../Interfaces/Data_interfaces'
import { Foldershare } from '../../src/app/models/foldershare'
import { file_share } from '../../src/app/models/File_share'
import { folder } from '../models/Folder_model'
import { exception, group } from 'console'
import { ExceptionMessage } from 'aws-sdk/clients/clouddirectory'
import { mongo, Mongoose } from 'mongoose'
import {groupmodel} from '../models/Group_model'
import { delete_folder_data } from '../database_AWs/Mongo_shared_functions'
import {Save_user_folder,get_user_folder,make_folder_in_sharing_mode,create_group} from '../database_AWs/Mongo_shared_functions'
import { send_mail_inviation } from '../database_AWs/Node_mailer'
import { email_send_invitation_group } from '../Interfaces/email_invitaion_interface'
/**
 * Esnsure the storage of Data by Aws
 */
const model =new upload_to_aws("","",null);
/**
 * @description This method allows recieving the Data from your bucket
 * @param req request from the user
 * @param res response to the user
 * @param next
 * @returns Array of folders that contains all your data under your prefix inserted in the request
 */


export async function get_bucket_data(req,res,next){
let arr_files=new Array<Filemodel>()
let arr_foldes=new Array<Foldermodel>()

let _User_token_data=Get_token_parametre((req.headers.authorization+"").split(' ')[1])
await model.get_bucket_list( _User_token_data.user_id +"",req.query.prefix+"",req.query.del+"").then(async (data)=>{

for await(const el of data.CommonPrefixes){
await   get_user_folder(el.Prefix,_User_token_data.user_id).then((folder_id)=>{
let folder=new Foldermodel(el.Prefix,null,"folder")

if(folder_id!=null){  folder.id=folder_id.id
folder.date=folder_id.date
console.log(folder)

}
folder.checked=false;
arr_foldes.push(folder)
})



}
data.Contents.forEach(ele=>{
var type= filter_file_type(ele.Key)
arr_foldes.push(new Filemodel(ele.Key,ele.LastModified,(ele.Size/1000),type))

})
}).then(()=>{res.status(200).json(arr_foldes)
}).catch(err=>{res.status(200).json({message:"err"})})
}
/**
 * @description  This method allows to create a new folder
 * @param req
 * @param res
 * @param nex
 */
export function getallfolders(req,res,nex){
return  folder.find().exec().then((data)=>{
res.status(200).json({message:data})
})


}
export function get_all_group(req,res,nex){
return groupmodel.find({}).exec().then((data)=>{
res.status(200).json(data)
})
}
export async function create_folder(req,res,nex){

let folder_name=req.body.foldername;
let _User_token_data=Get_token_parametre((req.headers.authorization+"").split(' ')[1])
console.log(_User_token_data)
await model.create_folder(_User_token_data.user_id,folder_name).then(async (data)=>{

let folder=new Foldermodel(folder_name,new Date(),'folder')
await  Save_user_folder(folder,_User_token_data.user_id).then(async (data)=>{

await    user_sockets.send_table_data_real_time(_User_token_data.user_id,folder_name).then(()=>{
res.status(200).json({message:'insert correct',value:true})

})//emit to  socket io

})

}).catch(err=>res.status(200).json({message:err,value:false}))
}


/**
 *@description  This method allows to Delete the selected Files or folders
* @param req request from the user
* @param res response to the user
* @param next
* @returns Success response || Faild response
*/

export   async function Delete_file(req ,res ,next){
let _User_token_data=Get_token_parametre((req.headers.authorization+"").split(' ')[1])

let _Files= req.body.Files as Filemodel[];
let _bucket_name=_User_token_data.user_id+"";
var _folder_name=_Files[0].nom

await  model.delete_files(_Files,_bucket_name).then(async ()=>{
await  delete_folder_data(_Files,_bucket_name).then(async ()=>{
user_sockets.send_table_data_real_time(_bucket_name,_folder_name)

})

res.status(200).json({message:"successfully deleted "})

}).catch(err=>{
res.status(200).json({error:err})

})
}
/**
 *@description  This method allows to rename a specific file
* @param req request from the user
* @param res response to the user
* @param next
* @returns  Success response || faild response
*/

export function rename_file(req,res,nex){
let _User_token_data=Get_token_parametre((req.headers.authorization+"").split(' ')[1])

let _bucket_name=_User_token_data.user_id
let _oldkey=req.body.oldkey
let _newkey=req.body.newkey
model.copy_folder(_bucket_name,_oldkey,_newkey).then(()=>{
user_sockets.send_table_data_real_time(_bucket_name,_newkey)

res.status(200).json({message:'done'})
})

}




/**
 * @description This method allows   the file existance verification
 * @param req request from the user
 * @param res response to the user
 * @param next
 * @returns Json Message  containing a valid(true || false)
 */

export function verifie_folder_exist(req,res,nex){
let _folder_name=req.body.foldername;
let _User_token_data=Get_token_parametre((req.headers.authorization+"").split(' ')[1])
let id="";
if(req.body.sharedtoken!=undefined){
let shared_folder= jwt.decode((req.body.sharedtoken)) as token_access_folder
id=shared_folder._Data_req_body._owner

}
else{
id=_User_token_data.user_id;
console.log("req done 2")

}
model.verfier_existance_file(id,_folder_name).then(()=>{
res.status(200).json({message:'error',value:false})
}).catch(()=>{
res.status(200).json({message:'valid',value:true})
})
}



/**
 *@description  This method allows to compress an Array of a File or a Folder (Zip)
* @param req request from the user
* @param res response to the user
* @param next
* @returns Faild message(500) || success message
*/






export function Zip_Files(req,res,nex){
let _files_keys =req.body.fileskey as  Array<Filemodel>;
let _bucket_name=Get_token_parametre((req.headers.authorization+"").split(' ')[1]).user_id
let _file:Filemodel=req.body.file
model.Ziped_files(_bucket_name,_files_keys,_file.nom).then((data)=>{
user_sockets.send_table_data_real_time(_bucket_name,_file.nom)
res.status(200).json({message:data})
}).catch(err=>res(500).json({messageerror:err}))
}

/**
 *@description  This method allows to upload an Array of  a File
* @param req request from the user
* @param res response to the user
* @param next
* @returns Success message
*/

export function upload(req,res,nex){
const data= req.body  as [{aws_data:Image_aws}]
let _bucket_name=Get_token_parametre((req.headers.authorization+"").split(' ')[1]).user_id

console.log(data[0].aws_data.buket_name+"ddddddddddddddddddddddd")
let  Aws_file=new upload_to_aws("","",data)
Aws_file.upload_image(_bucket_name,null).then(()=>{
});
res.status(200).json({ message:'success'})
}



/**
 *@description  This method allows to generate a link for your file
* @param req request from the user
* @param res response to the user
* @param next
* @returns Json Message contain your link
*/


export  function get_file_link(req,res,nex){
let _prefix=req.query.prefix;
let _bucket_name=Get_token_parametre((req.headers.authorization+"").split(' ')[1]).user_id
model.get_object_link(_bucket_name+"",_prefix+"").then((data)=>{
res.status(200).json({file_link:data})
})
}

/**
 *@description  This method allows to generate  link with expiration date
* @param req request from the user
* @param res response to the user
* @param next
* @returns Json Message contain your link
*/


export function  get_expire_link(req,res,nex){
let _prefix=req.query.prefix;
let _bucket_name=Get_token_parametre((req.headers.authorization+"").split(' ')[1]).user_id
let expire_date=  Number( req.query.expiretime)
model.get_expire_link(_bucket_name+"",_prefix+"",expire_date).then((data)=>{
res.status(200).json({file_link:data})
})
}
/**
 * @description This method alows to generate Access link
 * @param req
 * @param res
 * @param nex
 */

export async function generate_link_access(req,res,nex){
let _Data_req_body=req.body.folder  as Foldershare
let grou_id=new mongo.ObjectId().toHexString()
_Data_req_body.group_id=grou_id
console.log(_Data_req_body)
let _bucket_name=Get_token_parametre((req.headers.authorization+"").split(' ')[1]).user_id
let node_maier_object=new Object() as email_send_invitation_group ;
node_maier_object.emails=_Data_req_body._authorization_emails;
node_maier_object.group_name=_Data_req_body.group_name;
node_maier_object.owner_name=Get_token_parametre((req.headers.authorization+"").split(' ')[1]).email
node_maier_object.message=""
node_maier_object.join_link=""
try{
if(_Data_req_body._classification=='private'){
if(_Data_req_body.date) {
let _date_diff=(new Date(_Data_req_body.date).getTime( ) -   Date.now())/(1000)
console.log(_date_diff+"zzz time ***")
let token= jwt.sign({_Data_req_body:_Data_req_body},"secret",{expiresIn:Math.ceil(_date_diff)})
_Data_req_body._token=token
console.log(_Data_req_body)
console.log(node_maier_object)

return await create_group(_bucket_name,_Data_req_body).then(async (data)=>{
  await send_mail_inviation(node_maier_object).then(()=>{
    res.status(200).json(_Data_req_body)

  })

})

}
else{  let token= jwt.sign({_Data_req_body:_Data_req_body},"secret",{expiresIn:'365d'})
_Data_req_body._token=token
console.log("private without email ")}
return     await create_group(_bucket_name,_Data_req_body).then(async (data)=>{
  console.log(node_maier_object)
  await send_mail_inviation(node_maier_object).then(()=>{

  res.status(200).json(_Data_req_body)
  })
})

}

else if(_Data_req_body._classification=='public'){
let token= jwt.sign({_Data_req_body:_Data_req_body},"secret",{expiresIn:'365d'})
_Data_req_body._token=token
console.log("done 5")
}
res.status("202").json(_Data_req_body)






} catch(err){res.status('400').send(err)}
}



export function get_data_access(req,res,nex){
const _Token_folder_access=jwt.decode(req.body.token) as token_access_folder
let _owner_id=_Token_folder_access._Data_req_body._owner
let _full_path=_Token_folder_access._Data_req_body.nom
return model.get_bucket_list(_owner_id,_full_path,"/").then((data)=>{
console.log(data)
let arr_foldes=new Array<Foldermodel>()

data.CommonPrefixes.forEach(el=>{

let folder=new Foldershare(el.Prefix,null,"","",[])

folder.type='folder'
folder._classification=_Token_folder_access._Data_req_body._classification
console.log(folder._classification+"khayry azzez")
folder._owner=_owner_id
folder.checked=false;
let token=jwt.sign({_Data_req_body:folder},'secret',{expiresIn:'365d'})

folder._token=token
arr_foldes.push(folder)
})
data.Contents.forEach(ele=>{
var type= filter_file_type(ele.Key)
let file=new file_share(ele.Key,ele.LastModified,(ele.Size/1000),type)
arr_foldes.push(file)


})
res.status(200).json({data:arr_foldes,path_folder:_full_path})


})



}















/** Token Handler */

function Get_token_parametre(Token:string){
console.log(Token,"token")
var data= jwt.decode(Token) as token_user
console.log(data)
return data
}
function filter_file_type(Filet_name:string){
if(Filet_name.includes('.mp4')){
return "video"
}
else if (Filet_name.includes('.docx')){
return 'word'
}
else if (Filet_name.includes('.mp3')){
return 'audio'
}
else if(Filet_name.includes('.txt')){
return 'text'
}
else if(Filet_name.includes('png')||Filet_name.includes('.jpg')||Filet_name.includes('.PNG')){
return 'image'
}
else if(Filet_name.includes('.zip')){
return 'zip'
}
else if(Filet_name.includes('.rar')){
return 'rar'
}
}
