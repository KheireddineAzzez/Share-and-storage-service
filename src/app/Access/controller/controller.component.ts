import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Foldermodel } from 'src/app/models/foldermodel';
import { Foldershare } from 'src/app/models/foldershare';
import { ServiceshareService } from '../serviceshare.service';

@Component({
selector: 'app-controller',
templateUrl: './controller.component.html',
styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
datasource:MatTableDataSource<Foldershare>
constructor(      private service:ServiceshareService,private route:ActivatedRoute ,private router:Router    ) { }
path:string;
realpath:string;
ngOnInit(): void {
this.route.params.subscribe((data)=>{

let _id=data.id
this.service.get_access_folder(_id).then((data:{data:Foldershare[],path_folder:string})=>{
this.datasource=new MatTableDataSource(data.data )
let st=/\//g
this.path=data.path_folder.replace(st,"➜")
this.realpath=data.path_folder
console.log(data)
})
})
}


Awsome_path_view(path:string){
this.route.params.subscribe(data_param=>{
this.path=(data_param.id+"").replace("_",'/')
let id=  data_param.id+"";
let final_pre=  id.replace('_','/')
if(data_param.id!="acceuil"){//if the path is equal to acceuil it means that you are in the first path of the bucket
}
else{



}
})}
}
