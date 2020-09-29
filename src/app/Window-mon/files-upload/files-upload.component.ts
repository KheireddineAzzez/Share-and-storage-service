import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateFolderComponent } from '../create-folder/create-folder.component';
import { Image_aws } from 'Interfaces/Data_interfaces';
import { NgxFileDropEntry, FileSystemDirectoryEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ServiceclientService } from 'src/app/client/serviceclient.service';
import { Filemodel } from 'src/app/models/filemodel';
export interface imagedata{
  path:string,file_name:string,type:string ,size?:number ,last_modified?:string

}
@Component({
  selector: 'app-files-upload',
  templateUrl: './files-upload.component.html',
  styleUrls: ['./files-upload.component.css']
})
export class FilesUploadComponent implements OnInit {
  filess =new Array<imagedata>();
  public files: NgxFileDropEntry[] = [];
  @Output() even_files_uploaded=new EventEmitter<imagedata[]>()
path:string=""

  constructor(public dialogRef: MatDialogRef<CreateFolderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string ,private http:HttpClient,private rout:ActivatedRoute,private ser:ServiceclientService) {}

    ngOnInit(): void {

    }





    dropped(files: NgxFileDropEntry[]) {
      this.files = files;
      for (const droppedFile of files) {

        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
 var reader = new FileReader();
      reader.readAsDataURL(file);

      this.add_image(file)
          })

        } else {
          // = a directory
          const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
          console.log(droppedFile.relativePath, fileEntry);
        }
      }
    }

  add_image(file :File){
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload=(event)=>{
console.log(event.target.result.toString())
        this.filess.push({path:event.target.result.toString(),file_name:file.name,type:file.type,size:file.size,last_modified:new Date(file.lastModified).toDateString()}) }




    }




    upload_images(){

this.dialogRef.close(this.filess)
  }





  remove_image_from_files(image_item:imagedata){
     let index_item=this.filess.indexOf(image_item);
this.filess.splice(index_item, 1);
  }





}
