export class Foldermodel {
  nom:string;
  date:Date;
 type:string
 checked?=false
id?:string=""
constructor(nom:string,date:Date,type:string){
  this.nom=nom;
this.type=type
this.checked=false
   this.date=date;
}
public toString = () : string => {
  return this.nom;
}
}
