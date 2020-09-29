import socket from 'socket.io'
import http from 'http'
import {upload_to_aws} from '../database_AWs/User_action_aws'
import { Filemodel } from '../../src/app/models/filemodel'
import { Foldermodel } from '../../src/app/models/foldermodel'
import {User} from '../models/user'
import { write } from '../models/write'
import { read } from '../models/read'
import {get_user_folder} from '../database_AWs/Mongo_shared_functions'
 /**
  *@class (user_sockets)  This class ensures the real time of  data and actions
  *@param  server server of  My api
  */
export class user_sockets{
static  _server:http.Server
_data_aws:upload_to_aws;
static Socket:socket.Socket
_Path:string;
static data_aws: any
constructor(server:http.Server,path:string){
server=server;
this._Path=path;

}

/**
 * This method connects and joins the socket broadcast
 */

static listen_to_real_time(){
socket(this._server).on('connection',(socket)=>{
if(!this.Socket){
this.Socket=socket
}
socket.on('switchtorealtime',(date:{id:string})=>{
  socket.join(date.id.trim())


})
})
}
/**
 *@param word the prefix
 * @returns Array  occurrences positions
 */


static ocurance(word:string){
let  _Array_of_ocurrence=new Array<number>();
for (let index = 0; index <= word.length; index++) {
if(word[index]=='/'){
_Array_of_ocurrence.push(index)
}
}
return _Array_of_ocurrence;
}

/**
 * This method ensures the broadcasting of the user modified data
 *
 *
 * @param id id of user
 * @param prefix the current prefix of user
 */


static async send_table_data_real_time(id:string,prefix:string){
let _pre=""
if(prefix[prefix.length-1]!='/'){ // handle  the prefix of  the file
prefix=prefix+"/"
}
if(prefix.indexOf('/',0)+1==prefix.length){ // handle  the prefix of  the folder
_pre=""
}
else if(prefix.match('/').length>=1){ // handle a nested prefix
_pre=""
const regex = /\//g;
let _Length_of_slash=  prefix.match(regex).length
let _Final_prefix=this.ocurance(prefix)[(_Length_of_slash-2)]
_pre=prefix.slice(0,_Final_prefix+1)
}
let _Array_foldes=new Array<Foldermodel>()

return  await  this.data_aws.get_bucket_list(id,_pre,"/").then(async data=>{ //  get all data under the prefix  ()


for await(const el of data.CommonPrefixes){
  let folder=new Foldermodel(el.Prefix,null,"folder")
await   get_user_folder(el.Prefix,id).then((data)=>{
folder.id=data.id
folder.date=data.date
})

    folder.checked=false;
_Array_foldes.push(folder)


}
data.Contents.forEach(ele=>{

var type=   this.filter_file_type(ele.Key)
_Array_foldes.push(new Filemodel(ele.Key,ele.LastModified.toDateString(),(ele.Size/1000),type))
})

 ///Distribute data to users in the same room
}).then(()=>{this.Socket.to(id).emit('get_bucket_list',{general_path:_pre,data:_Array_foldes})})
}

/**
 * This method ensures the broadcasting Chart data
 *
 *
 * @param id id of user
 */
static async Charts_real_time(id:string){
let Data_char={chart_write:new Array<write>(),chart_read: new Array<read>()}
await    User.findById(id).exec().then(data=>{
Data_char.chart_write= (data.get('Write')   as Array<write>).filter((val)=>{if(val.Date>=this.get_current_week_data().firstdate
&&val.Date<= this.get_current_week_data().lastday){
return val
}}).sort((vl)=>vl.Date.getDate() -vl.Date.getDate())
return Data_char
}).then((data_chart)=>{
this
this.Socket.to(id).emit('get_chart_data',data_chart )
})
}




static get_current_week_data(){
var curr = new Date;
var first = curr.getDate() - curr.getDay();
var last = first + 6;
var firstday = new Date(curr.setDate(first))
var lastday = new Date(curr.setDate(last))
return {firstdate:firstday,lastday:lastday}
}




static  filter_file_type(Filet_name:string){
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

}
