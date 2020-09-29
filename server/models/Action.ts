import { float } from "aws-sdk/clients/lightsail";

export class Action{
constructor(nom_action:string,date:Date,Taile:float){
  this.Nom_action=nom_action
  this.Date=date;
  this.Taile=Taile;
}
Nom_action:string="";
   Date=new Date() ;
  Taile:float=0;

}
