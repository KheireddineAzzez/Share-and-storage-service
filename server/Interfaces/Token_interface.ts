import { Foldershare } from "../../src/app/models/foldershare";

export interface token_user{
  email:string
  user_id:string
 }
export  interface token_access_folder{

  _Data_req_body:Foldershare
}
