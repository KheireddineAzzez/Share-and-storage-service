import { float } from "aws-sdk/clients/lightsail";
import { Action } from "./Action";

  export class read extends Action{
    _id:string
    private _view: boolean = false;


    constructor(nom_action:string, date:Date,taile:float){
       super(nom_action,date,taile)

     }

}
