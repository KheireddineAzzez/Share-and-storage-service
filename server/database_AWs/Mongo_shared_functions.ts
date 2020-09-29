import mongose from 'mongoose'
import { Foldershare as fl_share, Foldershare } from '../../src/app/models/foldershare';
import {folder } from '../models/Folder_model'
import { mongo } from 'mongoose'
import { Foldermodel } from '../../src/app/models/foldermodel';
import { of } from 'rxjs';
import { Filemodel } from '../../src/app/models/filemodel';
import {groupmodel} from '../models/Group_model'
import { group } from '../../src/app/models/Group_access';
import { folder_classification } from '../../src/app/models/enums/Enum_folders';
import { group_iterface } from '../Interfaces/group_interface';
import { User } from '../models/user';
export async function Save_user_folder(foldershare:Foldermodel,user_id:string){
let folder_id=new mongose.Types.ObjectId();
foldershare.id=folder_id.toHexString();
let folders=new Array<Foldermodel>()
if( await folder.findOne({_iduser:user_id})){
return  await folder.update({_iduser:user_id},{$push:{folders:foldershare}})
}
else{
folders.push(foldershare)
return new folder({
_id:folder_id,
_iduser:new mongo.ObjectId(user_id),
folders: folders

}).save().then((data)=>{return foldershare})
}
}
var BreakException = {};

export async function get_user_folder(folder_name:string,user_id:string){
return await   folder.findOne({_iduser:user_id}).exec().then(async (data)=>{
let data_model=data.get('folders') as Foldermodel[]
for await(const ele of data_model){
if(ele.nom==folder_name){
return ele
}
}
})


}

export async function get_all_groups(user_id:string){
return await  groupmodel.findOne({_id:user_id}).exec().then((data)=>{


let groups= data.get('groups') as Array<group>

let private_group=groups.filter((val)=>{return val.Access==folder_classification.Private})
let public_group=groups.filter((val)=>{return val.Access==folder_classification.public})
let group_format=new Object() as  group_iterface
group_format.private_group=private_group;
group_format.public_group=public_group;
return  group_format
})

}


export async function delete_folder_data(Folders:Foldermodel[],user_id:string){
for await (const ele of Folders){

await  folder.updateOne({_iduser:user_id},{$pull:{folders:{id:ele.id}}})



}



}
export async function make_folder_in_sharing_mode(Folder:Foldermodel,user_id:string){
return await folder.update({_iduser:user_id,"folders.id":Folder.id},{$set:{folders:{}}}).exec()
}
export  async function create_group(user_id:string , Sharedfodler:Foldershare){
let object_id=new mongo.ObjectId(user_id);
let new_group =new group()
new_group.goroup_name=Sharedfodler.group_name
new_group.group_id=Sharedfodler.group_id
new_group.folder_id=Sharedfodler.id;
new_group.Creation_date=new Date();
new_group.Members=new Array()

Sharedfodler._authorization_emails.forEach((val)=>{
  new_group.Members.push({email:val,accepted:false})
})
new_group.token=Sharedfodler._token;
console.log(new_group)
if(Sharedfodler._classification=='private'){
new_group.Access=folder_classification.Private;


}
else{ new_group.Access=folder_classification.public}
let group_array=new Array<group>();
group_array.push(new_group)
if(await groupmodel.findOne({_id:user_id})){
return await groupmodel.update({_id:user_id},{$push:{groups:new_group}})
}
else{
return await new   groupmodel({
_id:object_id  ,
groups:group_array

}).save().then((data)=>{return data})
}



}
export async function person_accept_invitation(groupid:string,person_email:string,user_id:string){
  console.log(groupid+person_email+user_id)
  return await groupmodel.findOne({_id:user_id}).exec().then((data)=>{
  let groups=data.get('groups') as Array<group>
groups.forEach((ele)=>{
  if(ele.group_id==groupid){
    ele.Members.forEach((el)=>{
      if(el.email==person_email){
        el.accepted=true

      }
    })
  }
})
return groups
  }).then(async data=>{
     return await groupmodel.update({_id:user_id},{$set:{groups:data}})
  })

}

export async function destroygroup(userid:string,groupid:string){

  return await  groupmodel.updateOne({_id:userid},{$pull:{groups:{group_id:groupid}}}).then(()=>{
    return "your group has been deleted"
  })

}
export async  function rename_group_user(user_id:string,group_id:string,group_name:string){
  console.log(group_name)
 return  await groupmodel.findOne({_id:user_id,"groups.group_id" :group_id}).exec().then(async (data)=>{
   let data_groups= data.get('groups') as Array<group>
data_groups.forEach((ele)=>{
   if(ele.group_id==group_id){
      ele.goroup_name=group_name
   }
})
   return await    groupmodel.updateOne({_id:user_id},{$set:{groups:data_groups}})
 })
}
