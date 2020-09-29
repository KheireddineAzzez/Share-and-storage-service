import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foldershare } from 'src/app/models/foldershare';
import { Folder_creation } from 'src/app/user/files/nav-files/nav-files.component';
import { CreateSharedFolderComponent } from 'src/app/Window-mon/shared/create-shared-folder/create-shared-folder.component';
import { FilesUploadComponent, imagedata } from 'src/app/Window-mon/files-upload/files-upload.component';
import { WinService } from 'src/app/Window-mon/win.service';
import { ServiceshareService } from '../../serviceshare.service';

@Component({
  selector: 'app-nav-share',
  templateUrl: './nav-share.component.html',
  styleUrls: ['./nav-share.component.css']
})
export class NavShareComponent implements OnInit {
@Input() Folder:Foldershare
  constructor( private service_win:WinService,private share_serv:ServiceshareService,private route:ActivatedRoute ) { }
token:string=""
@Input() path=""
  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.token=data.id

    })

  }
create_newfolder(){

}
 upload_Files(){

    this.service_win.open_upload_files(FilesUploadComponent,"").afterClosed().subscribe((data:imagedata[])=>{
    if(data!=undefined){
      this.share_serv.upload_shared_files(data,this.token,this.path).toPromise().then((data)=>{
        console.log(data)
    })


   }})}
    create_folder(){
let folder_creation=new Object() as Folder_creation
folder_creation.folder_name="";
folder_creation.path=this.path;
folder_creation.accepted=false
this.service_win.open_share_folder_creation(CreateSharedFolderComponent,{folderc:folder_creation,token:this.token}).afterClosed().subscribe((data:{folderc:Folder_creation,token:string})=>{
this.share_serv.create_shared_folder(this.path+data.folderc.folder_name,data.token)



    })
    }
}
