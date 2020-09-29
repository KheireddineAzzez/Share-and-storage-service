import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { Image_aws } from 'Interfaces/Data_interfaces';
import { imagedata } from '../Window-mon/files-upload/files-upload.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceshareService {
$path="http://localhost:3000/shared/"
  constructor(private http:HttpClient) { }
  get_access_folder(token:string){
    return this.http.post("http://localhost:3000/image/Acessfolder",{token:token}).toPromise()
  }

   upload_shared_files( data:imagedata[],folder_token:string,path:string){
    let files=new Array<{aws_data:Image_aws}>()
    data.forEach(elem=>{
      files.push({aws_data:{data:elem.path,name:path+elem.file_name,type:elem.type,buket_name:""}})

      })

    return this.http.post(`${this.$path}uploadsharedfile`,{Files:files,token:folder_token})
    }
    Verifier_object_exist(prefix:string="",token:string){
      return  this.http.post("http://localhost:3000/user/verifyfolder",{foldername:prefix+"/",sharedtoken:token}).toPromise()

      }

      create_shared_folder(prefix:string,token:string){
        return  this.http.post("http://localhost:3000/shared/createsharedfolder",{foldersharename:prefix,token:token}).toPromise()

      }
}
