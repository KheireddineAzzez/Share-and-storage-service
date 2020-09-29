import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import {Filemodel} from '../../models/filemodel'
import { Router, ActivatedRoute } from '@angular/router';
import { imagedata } from 'src/app/Window-mon/files-upload/files-upload.component';
export interface PeriodicElement {
name: string;
position: number;
weight: number;
symbol: string;
}

@Component({
selector: 'app-files',
templateUrl: './files.component.html',
styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
file:Filemodel
path:string="";
real_path:string=""
file_even_delete=new EventEmitter<Filemodel[]>();
Menu_show={addfolder:true,upload:true}
file_even=new EventEmitter<imagedata[]>();
Files_destruction=new Array<Filemodel>()
even=new EventEmitter<string>();
constructor( private serv:ServiceclientService,private rout:ActivatedRoute,private router:Router) { }
ngOnInit(): void {
this.pathchange()
this.file_even_delete.subscribe(da=>{


console.log(da)
})
this.serv.get_bucket_data("","").toPromise().then(()=>{
this.dataSource
})
}
displayedColumns: string[] = ['check','nom','menu' ,'date', 'size'];
dataSource

pathchange(){

this.rout.params.subscribe((data)=>{
this.real_path=(data.id+"").replace('acceuil',"").replace('_','/')
console.log(data.id)
let st=/\//g
let para_path=(data.id+"").toString().replace("_",'➜')
para_path=para_path.toString().replace(st,'➜')


console.log(para_path)
if(!para_path.includes('acceuil')){
this.path=("acceuil➜"+para_path);

}else{
this.path=para_path;

}
})


}
add_delete_files(Files:Filemodel[]){
this.Files_destruction=Files
}

create_folder(folder_name:string){
console.log(this.real_path)
this.serv.create_folder(this.real_path+folder_name+"/").then((data)=>{
console.log(data['value'])
if(data['value']==true){
this.even.emit(folder_name)

}


})
}
create_file(data:imagedata[]) {
console.log(data[0].size)

this.file_even.emit(data)
}
deleted($event){
this.file_even_delete.emit($event)
}

}
