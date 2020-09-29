/**
 * @description this class the method that generated for the file
 */
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WinService } from 'src/app/Window-mon/win.service';
import { LinkFileComponent } from 'src/app/Window-mon/link-file/link-file.component';
import { ShareFileComponent } from 'src/app/Window-mon/share-file/share-file.component';
import { RenameFileComponent } from 'src/app/Window-mon/rename-file/rename-file.component';
import { Filemodel } from 'src/app/models/filemodel';
import { HttpClient } from '@angular/common/http';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { Base64 } from 'js-base64';
@Component({
selector: 'app-menu-file',
templateUrl: './menu-file.component.html',
styleUrls: ['./menu-file.component.css']
})
export class MenuFileComponent implements OnInit {

constructor(private win:WinService,private http:HttpClient,private serv_client:ServiceclientService) { }
@Input() buket_name=""

@Input() prefix_name:string="";
@Output() rename_event=new EventEmitter<{old_name:string,new_name:string,index:number}>();
@Input() index_number:number;
ngOnInit(): void {
console.log(this.prefix_name)

}
open_link_file(){

this.win.open_link_file(LinkFileComponent,this.prefix_name)
}
open_mail_sender(){
this.win.open_Mailer_link(ShareFileComponent,this.prefix_name)
}
open_rename(){
this.win.open_rename_file(RenameFileComponent,this.prefix_name).afterClosed().toPromise().then((data:string)=>{

if(data!=undefined){
this.rename_event.emit({old_name:this.prefix_name,new_name:data,index:this.index_number})


}
})
}
View_file(){
this.serv_client.get_link(this.prefix_name).then((data)=>{
window.open(data['file_link'])
})

}
}
