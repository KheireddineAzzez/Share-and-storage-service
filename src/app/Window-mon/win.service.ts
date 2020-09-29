import { Injectable, Component, TemplateRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import {MatSnackBar} from '@angular/material/snack-bar'
import { SuccesSnakeComponent } from '../Snaks_bar/succes-snake/succes-snake.component';
import { FaildSnakeComponent } from '../Snaks_bar/faild-snake/faild-snake.component';
import { Foldershare } from '../models/foldershare';
import { Foldermodel } from '../models/foldermodel';
import { Folder_creation } from '../user/files/nav-files/nav-files.component';
@Injectable({
providedIn: 'root' ,useValue:{},
})
export class WinService  {

constructor(private route:Router,private dialog:MatDialog,private snake:MatSnackBar) { }

create_account(){
this.route.navigate(['/','createaccount']).then(ff=>{console.log(ff)}).catch(err=>{console.log(err)})
}



open_folder_creation(component :TemplateRef<unknown>|ComponentType<unknown>,data:any){
return   this.dialog.open(component,{

width:'25%',
height:'45%',
data:data
})

}
open_upload_files(component :TemplateRef<unknown>|ComponentType<unknown>,data:string){

return   this.dialog.open(component,{
panelClass: ['no-padding', 'no-scrolls'],

width:'50%',
height:'70%',
data:data,
})

}

open_link_file(component :TemplateRef<unknown>|ComponentType<unknown>,data:string){


return this.dialog.open(component,{

width:'40%',
height:'40%',
data:data,
backdropClass:['File_link']


})

}
open_Mailer_link(component :TemplateRef<unknown>|ComponentType<unknown>,data:string){
return this.dialog.open(component,{

width:'40%',
height:'40%',
data:data,
backdropClass:['border_rad'],
panelClass: ['no-padding', 'no-scrolls'],


})

}
open_success_snake(data){
this.snake.openFromComponent(SuccesSnakeComponent,{
duration:5000,
data:data,
panelClass:['border_rad',"snak"]
})
}
open_rename_file(component :TemplateRef<unknown>|ComponentType<unknown>,data:string){
return this.dialog.open(component,{

width:'25%',
height:'30%',
data:data,
backdropClass:['border_rad'],
panelClass: ['no-padding', 'no-scrolls'],
})
}

open_ziper_files(component :TemplateRef<unknown>|ComponentType<unknown>,data:any){
return this.dialog.open(component,{

width:'30%',
height:'35%',
data:data,
panelClass: ['no-padding', 'no-scrolls'],

})
}
open_snak_error(data){
return this.snake.openFromComponent(FaildSnakeComponent,{
duration:5000,
data:data,
panelClass:['border_rad',"snak_error"]
})


}

 open_access_Foldet(component :TemplateRef<unknown>|ComponentType<unknown>,data:Foldermodel){

  return this.dialog.open(component,{

    width:'50%',
    height:'60%' ,
    panelClass: ['no-padding', 'no-scrolls'],

data:data
  })
 }

 open_share_folder_creation(component :TemplateRef<unknown>|ComponentType<unknown>,data:{folderc:Folder_creation,token:string}){
  return   this.dialog.open(component,{

  width:'25%',
  height:'45%',
  data:data
  })
}

}

