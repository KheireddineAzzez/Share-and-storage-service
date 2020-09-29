  /**
 * @description This class handle Events like (Delete,Create new folder,Zippe a group of files ,upload Files)
 */
 import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { WinService } from 'src/app/Window-mon/win.service';
import { CreateFolderComponent } from 'src/app/Window-mon/create-folder/create-folder.component';
import { FilesUploadComponent, imagedata } from 'src/app/Window-mon/files-upload/files-upload.component';
import { ActivatedRoute } from '@angular/router';
import { Filemodel } from 'src/app/models/filemodel';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { Foldermodel } from 'src/app/models/foldermodel';
import { ZipfolderComponent } from 'src/app/Window-mon/zipfolder/zipfolder.component';

export interface Folder_creation{
path:string,
accepted:boolean,
folder_name:string;
}


@Component({
selector: 'app-nav-files',
templateUrl: './nav-files.component.html',
styleUrls: ['./nav-files.component.css']
})
export class NavFilesComponent implements OnInit {
@Output() Create_folder=new EventEmitter<String>();
@Output() create_files=new EventEmitter<imagedata[]>()
@Input() deleted_file=new Array<Filemodel>();
@Output() files_deleted= new  EventEmitter<Filemodel[]>();
@Input() show_menu={addfolder:Boolean,upload:Boolean}
folder_name:string="";
current_path:string=""
constructor(private ser:WinService ,private rout :ActivatedRoute,private client_ser:ServiceclientService) { }

ngOnInit(): void {
this.rout.params.subscribe(datas=>{
if((datas.id+"").includes('acceuil')) return this.current_path=""
this.current_path=(datas.id+"").replace('acceuil','');

this.current_path=this.current_path.replace('_','/');
console.log(this.current_path)
})

}
/**
 * @description open window to create file
 */
open_window(){
let folder_creation:Folder_creation=new Object() as Folder_creation;
folder_creation.accepted=false,
folder_creation.path=this.current_path
folder_creation.folder_name=""
this.ser.open_folder_creation(CreateFolderComponent,folder_creation).afterClosed().subscribe((data:Folder_creation)=>{
if(folder_creation.accepted){
console.log(folder_creation.folder_name)


this.Create_folder.emit(data.folder_name)}

})

}
/**
 * @description upload All droped files
 */
open_file_upload(){
this.ser.open_upload_files(FilesUploadComponent,this.current_path).afterClosed().subscribe((data:imagedata[])=>{
  /**
* @description Emit data to Datatable
*/
this.client_ser.upload_file(data,this.current_path).then(()=>{
})
this.create_files.emit(data)


})

}

/**
 * @description Delete ALL chekced Files
 */
delete_files(){

this.client_ser.Delete_objects(this.deleted_file).then(()=>{

return Promise.resolve(  this.files_deleted.emit(this.deleted_file)).then((der)=>{


})

})
}

/**
 * @description This method Zipped a Group of files
 */
Zipp_files(){
let  File_name:string=""
let folder_creation:Filemodel=new Object() as Filemodel;
this.ser.open_ziper_files(ZipfolderComponent,folder_creation.nom).afterClosed().subscribe((data)=>{
if(data!=""){
console.log("data1",data)
folder_creation.nom=data as string
this.client_ser.upload_file_zip(this.deleted_file,folder_creation).then((data)=>{

console.log(data)
})}
})




} }
