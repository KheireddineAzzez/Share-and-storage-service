import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Filemodel } from 'src/app/models/filemodel';
import { Observable, Observer, Subscription } from 'rxjs';
import { Foldermodel } from 'src/app/models/foldermodel';
import { MatTableDataSource } from '@angular/material/table';
import { imagedata } from 'src/app/Window-mon/files-upload/files-upload.component';
import { ProgressBarMode } from '@angular/material/progress-bar';
@Component({
selector: 'app-datatable',
templateUrl: './datatable.component.html',
styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
Check_all:boolean=false;
@Input() Folder_created: EventEmitter<string>
@Output()  event_delete=new EventEmitter<Foldermodel []>();//Event From the navbar to fire the action of delete
@Input() Files_destruction: Array<Filemodel>;//The Files those will be distructed
@Input() Files_are_complete_deleted= new EventEmitter<Filemodel[]>()
@Input() File_created:EventEmitter<imagedata[]>
@Output() show_delete_file=new EventEmitter<boolean>(true);
file:Foldermodel
@Input() path:string=""
Folders:Observable<[]>
displayedColumns: string[] = ['check','nom','menu' ,'date', 'size'];
dataSource:   MatTableDataSource<Foldermodel>;//datasource of Table
cheked_item=new Array<Foldermodel>();//The chekced items
show_spinner:boolean=false;
show_data_transfert:boolean=true

constructor( private serv:ServiceclientService,private rout:ActivatedRoute,private router:Router) {
}

ngOnInit(): void {

this.serv.get_bucket_data(this.path,"",'/').subscribe(data=>{  //get  bucket data
  this.show_data_transfert=false
this.dataSource=new MatTableDataSource(data as Foldermodel[])
})

this.serv.switch_to_real_data()//swith to real data

this.serv.listen_to_real_data().subscribe((data )=>{  //listen to all changes
if(this.path==data.general_path){

console.log(data.data)
this.dataSource.data=data.data
}
this.dataSource.filter=""
this.dataSource._updateChangeSubscription()//update the table

})

this.Files_are_complete_deleted.subscribe(async (data:Foldermodel[])=>{//Files are deleted
for  (const el of data){
const index=this.dataSource.data.indexOf(el);
this.dataSource.data.splice(index,1)
}
data.length=0
this.dataSource.filter=""
})


this.sub_url_para();
this._listen_to_folder_creation()
this._listen_to_file_creation()
}

_listen_to_folder_creation(){
if(this.Folder_created!=undefined){
 return  this.Folder_created.subscribe(data=>{
    console.log(data+"new folder")
    this.dataSource.filter=""

    })

}

}











/**
 * @description  Method to rename the file
 * @param $event File or folder
 *
 */
rename_file($event:{old_name:string,new_name:string,index:number}){
this.dataSource.data[$event.index].nom=$event.new_name+$event.old_name.substr($event.old_name.indexOf('.'),)
this.dataSource.filter=""

}
/**
 *@description This method Allows to check or uncheck  a specific folder or file
* @param folder  The checked folder
*
*/

fire_delet_event(folder:Foldermodel){
if(folder.checked==false){
this.cheked_item.push(folder)
}
else{
const index = this.cheked_item.indexOf(folder,0);
if (index > -1) {
this.cheked_item.splice(index, 1);
}
}
this.event_delete.emit(this.cheked_item)//emit the event to the navbar
this.check_all_selected()
}



/**
 *
 * @description this method allow to extact the correct name from the real prefix
 * @param name the prefix of file or folder
 */
get_correct_folder_file_name(name:string):string{

let _Path_name=name.split('/')
if(_Path_name.length>=1){
return   _Path_name[_Path_name.length-1]

}
else{
return name
}
}

/**
 * Function canceled after reverse to real time(req,res) with socket.io
 */
_listen_to_file_creation(){
  if(this.Folder_created!=undefined){

this.File_created.subscribe((data:imagedata[])=>{
console.log(data);
/*data.forEach(ele=>{
console.log(ele.file_name)
this.dataSource.data.push(new Filemodel(this.path+ele.file_name,ele.last_modified,(ele.size/1000),'file'))

})*/
/*this.dataSource.filter=""*/

})}
}

/**
 * @description this method allow to Check all files
 */
Check_all_file(){
if(this.Check_all==false){

this.dataSource.data.map((val)=>{val.checked=true})
this.cheked_item.length=0;
this.cheked_item.push(...this.dataSource.data)
this.event_delete.emit(this.cheked_item)
}
else{
this.dataSource.data.map((val)=>{val.checked=false})
this.cheked_item.length=0
this.Check_all=true

}
}
/**
 *@description  This method allows to access
* @param prefix the prefix of Folder
*/
folder_acces(prefix:string){
var url=prefix.replace('/','_');
this.router.navigate(['Userprofile/Files/',url]).then(()=>{


console.log(this.path)
})

}
/**
 * @description Handler the url parametre
 *
 */
sub_url_para(){
this.rout.params.subscribe(data_param=>{
this.path=(data_param.id+"").replace("_",'/').replace("acceuil","")
let id=  data_param.id+"";
let final_pre=  id.replace('_','/')
if(data_param.id!="acceuil"){//if the path is equal to acceuil it means that you are in the first path of the bucket
this.serv.get_bucket_data("",final_pre,'/'+"").subscribe(data=>{
this.dataSource.data=data
})}
else{
this.serv.get_bucket_data("","",'/').subscribe(data=>{
this.dataSource.data=data
})

}
})
}
check_all_selected(){
if(this.cheked_item.length==this.dataSource.data.length){
this.Check_all=true
}
else {
this.Check_all=false
}
}
}
