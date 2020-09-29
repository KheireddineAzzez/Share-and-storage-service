import { Component, OnInit, Input, Output, EventEmitter ,} from '@angular/core';
import { Filemodel } from 'src/app/models/filemodel';
import {imagedata} from '../../Window-mon/files-upload/files-upload.component'

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
@Input() file:imagedata;
@Output() remove=new EventEmitter<imagedata>()
fake_path:string=""
 constructor() {


  }

  ngOnInit(): void {
  try{
    this.fake_path=this.filter_file_type(this.file.file_name)

  }
catch(ex){console.log(ex)}
}
Remove_image(){
  this.remove.emit(this.file)
}
 filter_file_type(Filet_name:string){
  if(Filet_name.includes('.mp4')){
    return "https://img.icons8.com/fluent/120/000000/video.png"
  }
  else if (Filet_name.includes('.docx')){
    return 'https://img.icons8.com/color/120/000000/microsoft-word-2019--v2.png'
  }
  else if (Filet_name.includes('.mp3')){
   return 'https://img.icons8.com/color/200/000000/audio-skimming.png'
 }
else if(Filet_name.includes('.txt')){
return 'https://img.icons8.com/ultraviolet/120/000000/txt.png'
}
else if(Filet_name.includes('.png')||Filet_name.includes('.jpg')|| Filet_name.includes('.PNG')){
return this.file.path
}
else if(Filet_name.includes('.zip')){
return 'https://img.icons8.com/ultraviolet/120/000000/zip.png'
}
else if(Filet_name.includes('.rar')){
return 'https://img.icons8.com/ultraviolet/120/000000/rar.png'
}
}



}
