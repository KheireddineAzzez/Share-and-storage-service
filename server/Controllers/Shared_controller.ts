import jwt from 'jsonwebtoken'
import { upload_to_aws } from '../database_AWs/User_action_aws'
import { Filemodel } from '../../src/app/models/filemodel'
import { Foldermodel } from '../../src/app/models/foldermodel'
import { token_access_folder,token_user  } from '../Interfaces/Token_interface'
import { user_sockets } from '../sockets/User_socket'
import { Image_aws } from '../../Interfaces/Data_interfaces'
import { Foldershare } from '../../src/app/models/foldershare'
import { file_share } from '../../src/app/models/File_share'
import { json } from 'body-parser'

const model_AWS =new upload_to_aws("","",null);

 export async function upload_shared_file(req,res,nex){
  const _userinfo=jwt.decode((req.headers.authorization+"").split(' ')[1]) as  token_user
  console.log("ddddddddddddd12333")
   let folder_token=req.body.token;
   console.log("*****************",folder_token)
let Filed_uploaded=req.body.Files as  [{aws_data: Image_aws}]
console.log(Filed_uploaded)
let  Aws_file=new upload_to_aws("","",Filed_uploaded)

   let foldershare=(jwt.decode((folder_token)) as token_access_folder)._Data_req_body
await  Aws_file.upload_image(foldershare._owner,null).then(()=>{
    res.status(200).json({message:"seccesfly uploaded shared folde"})
  })



 }


 export function create_shared_folder(req,res,nex){
  let folder_name=req.body.foldersharename+"";
  let _User_token_data=Get_token_parametre((req.headers.authorization+"").split(' ')[1])

   let folder_share=(jwt.decode(req.body.token) as  token_access_folder)._Data_req_body
console.log(folder_share,"done")
console.log(folder_name+"")
model_AWS.create_folder(folder_share._owner,folder_name+"/").then(()=>{

  user_sockets.send_table_data_real_time(folder_share._owner,folder_name)//emit to  socket io
   res.status(200).json({message:'insert correct',value:true})
}).then(()=>{}).catch(err=>res.status(200).json({message:err,value:false}))
}












function Get_token_parametre(Token:string){
  console.log(Token,"token")
var data= jwt.decode(Token) as token_user
console.log(data)
return data
}
