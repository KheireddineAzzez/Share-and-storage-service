import { send_email } from "../database_AWs/Node_mailer";
import { email_sender } from "../Interfaces/email_";

export function send_mail(req,res,nex){
let Mails:email_sender=req.body
send_email(Mails).then(()=>{
res.status(200).json(Mails)
}).catch((err:Error)=>{ console.log(err);res.status(501).json(err.message)})
}
export function sendmailtojoingroup(req,res,nex){
  let emails_list=req.body.emails;

 }
