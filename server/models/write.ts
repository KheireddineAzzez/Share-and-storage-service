import { float } from "aws-sdk/clients/lightsail";
import { Action } from "./Action";

export class write extends Action{
  id?:string
  type:string=""
constructor(nom:string,date:Date,taile:float,type:string){
  super(nom,date,taile)
  this.type=type
}

}
