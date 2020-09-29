import { Foldermodel } from './foldermodel';

export class Foldershare  extends Foldermodel{
group_name:string
group_id:string
_token?:string=""
_authorization_emails:string[]
_owner?:string=""
_classification:string
_id:string
constructor(nom:string,date:Date,type:string,phy_path:string,authorization_emails:string[]){
   super(nom,date,type)
   this._authorization_emails=authorization_emails;

}


}
