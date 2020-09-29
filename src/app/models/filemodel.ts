import { Foldermodel } from './foldermodel';

export class Filemodel extends Foldermodel {
size:number;
constructor(nom:string,date:Date,size:number,type:string){
  super(nom,date,type)

this.size=size;
this.checked=false
}


}
