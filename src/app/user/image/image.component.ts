import { Component, OnInit } from '@angular/core';
import {Image_aws} from 'Interfaces/Data_interfaces'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
files =new Array<{path:string,file_name:string}>();
drawer_open:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

add_image($event){
for (let index = 0; index < $event.target.files.length; index++) {
  const element = $event.target.files[index];
  var reader = new FileReader();
  reader.readAsDataURL(element);
reader.onload=(event)=>{

  this.files.push({path:event.target.result.toString(),file_name:$event.target.files[index].name}) }



}
}
openside($event){
  this.drawer_open=$event
}
upload_images(){
  let data=new Array<{aws_data:Image_aws}>()
this.files.forEach(elem=>{

})

   this.http.post('http://localhost:3000/image/upload',data).toPromise().catch(err=>{console.log});
   console.log(data)
}
}
