import {User}  from '../models/user'
import mongo from 'mongoose'
import { decode} from 'base64-arraybuffer'
 import aws from'aws-sdk'
 import {Image_aws} from '../../Interfaces/Data_interfaces'
import { Buffer } from 'buffer'
import { Filemodel } from '../../src/app/models/filemodel';
import { of } from 'rxjs';
import { user_sockets } from '../sockets/User_socket';
import path from 'path'
import zipedit from 'adm-zip'
import { Foldermodel } from '../../src/app/models/foldermodel';
import { write } from '../models/write';
const User_contract = new aws.S3({
endpoint: 'http://localhost:9000',
secretAccessKey:'kheireddineazzez' ,
accessKeyId:'kheireddineazzez',
s3BucketEndpoint: true,
s3ForcePathStyle: true,
signatureVersion: "v4",
   })



export class upload_to_aws{


bucket_name:string;
key:string;
data:[{aws_data:Image_aws}] | null
constructor(bucket_name:string="",key="",source:[{aws_data:Image_aws}] | null ){
this.data=source;
this.bucket_name=bucket_name
this.key=key
}

async upload_image(bucket_name:string,source:[{aws_data:Image_aws}]){
if(this.data==null){
this.data=source
}
let contentType = 'image/png';

try {

for await(const elem of this.data)
this.data.forEach(async elem=>{
let pur_image_file=elem.aws_data.data
let bin =   decode(pur_image_file)
let buf= Buffer.from(pur_image_file.replace("data:video/mp4;base64,","").replace(/^data:audio\/\w+;base64/,"").replace(/^data:image\/\w+;base64,/, "").replace("data:text/plain;base64,","").replace("data:application/octet-stream;base64,","")
,'base64')
console.log(pur_image_file.slice(0,30))
return await     User_contract.upload({
Bucket:bucket_name,
ContentEncoding: 'base64',

Key:elem.aws_data.name,
Body:buf,

}).promise().then(async (data)=>{ await  user_sockets.send_table_data_real_time(bucket_name,elem.aws_data.name).then(async ()=>{

  let wr=new write("write",new Date(),Buffer.byteLength(buf)/1e+6 ,"upload");

await  this.write_action(bucket_name,wr)
user_sockets.Charts_real_time(bucket_name)
})



}).catch(err=>{console.log(err)})

})

}
catch (error) {
}}



async create_bucket(bucket_name:string){
return  await User_contract.createBucket({
Bucket:bucket_name
}).promise().catch((err)=>{console.log(err.message)})

}

get_bucket_list(BUCKE_name:string,prefix:string,del:string){
return  User_contract.listObjectsV2({
Bucket:BUCKE_name,
Prefix:prefix,
Delimiter:del,
}).promise()

}

create_folder(bucket_name:string,prefix:string){
return User_contract.upload({
Bucket:bucket_name,
Key:prefix,
Body:"",
ContentType:''

}).promise().then((data)=>{return data})
}


verfier_existance_file(bucket_name:string,prefix:string){
return  User_contract.getObject({
Bucket:bucket_name,
Key:prefix
}).promise();
}
async get_object_link(bucket_name:string,key:string){
return await User_contract.getSignedUrlPromise("getObject",{
Bucket: bucket_name,
Key: key  ,
})

}
async get_expire_link(bucket_name:string,key:string,expire_time:number){
return await User_contract.getSignedUrlPromise("getObject",{
Bucket: bucket_name,
Key: key  ,
Expires: expire_time,

}  )
}

async delete_files(Files :Filemodel[] ,bucket_name:string){
let arr=new Array<{Key:string}>()
let arr_folder=new Array<{Key:string}>();
let some=0;
for await(const file of  Files) {

if(file.nom.indexOf("/")+1==file.nom.length||file.nom.lastIndexOf('/')+1==file.nom.length){
  console.log(file.nom)

  await this.delete_folder(file.nom,bucket_name)
}
else {
  console.log(file.nom)

some=some+file.size
await this.delete_object(file.nom,bucket_name)
}
}
let wri:write=new write("write",(new Date()),some/1000,"Delete")
console.log(some)
await  this.write_action(bucket_name,wri).then(async ()=>{
await user_sockets.Charts_real_time(bucket_name)
})
}

delete_object(key:string,bucket_name:string){
return User_contract.deleteObject({
Bucket:bucket_name,
Key:key
}).promise()

}


async delete_folder(key:string,bucket_name:string){
let somme:number=0;
return  await this.get_bucket_list(bucket_name,key,"").then(async (data)=>{
for await (const elem of data.Contents ){
if(elem!=null){
somme=elem.Size+somme;
}
await  User_contract.deleteObject({
Bucket:bucket_name,
Key:elem.Key
}).promise().then(async ()=>{
let wri:write=new write("write",(new Date()),somme/1000,"Delete")
await  this.write_action(bucket_name,wri).then(async ()=>{
await user_sockets.Charts_real_time(bucket_name)
})
})
somme=0;
}


await  User_contract.deleteObject({
Bucket: bucket_name,
Key: data.Prefix
}).promise()
}).then(()=>{return 0})
}


async copy_folder(BUCKET_NAME:string,OLD_KEY:string,NEW_KEY:string){
return await User_contract.copyObject({
Bucket: BUCKET_NAME,
CopySource: `${BUCKET_NAME}/${OLD_KEY}`,
Key: NEW_KEY
})
.promise()
.then(async () =>
// Delete the old object
await   User_contract.deleteObject({
Bucket: BUCKET_NAME,
Key: OLD_KEY
}).promise()
)
.catch((e) => console.error(e))
}


get_file_data(bucket_name:string,prefix:string){
User_contract.getObject({
Bucket:bucket_name,
Key:prefix  ,
}).promise().then((data)=>{
})
}

async Ziped_files(bucket_name:string,Files:Array<Foldermodel>,zip_name:string){
let ziper= new zipedit()
for await (const el of Files){
if(el.type.includes("folder")){
try{
console.log(el.nom.slice(0,el.nom.length-1))
ziper.addLocalFolder("C:\\miniosdk\\data\\"+bucket_name+"\\"+el.nom.replace('/',''))
} catch(err){ console.log(err)}}
else{
ziper.addLocalFile("C:\\miniosdk\\data\\"+bucket_name+"\\"+(el.nom.replace('/','\\')))
}
}
console.log(ziper.getEntries)
return await User_contract.putObject({
Bucket:bucket_name,
Body:ziper.toBuffer(),
Key:'package/'+zip_name+".zip"
}).promise()
}
async write_action(id:string,wr:write){
return await User.update({_id:id},{$push:{Write:wr}}).exec().then((()=>{
return {message:"correct",value:true}
}))
}


}


