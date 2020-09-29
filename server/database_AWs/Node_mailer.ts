import nodes,{SendMailOptions} from 'nodemailer'
import { email_sender } from '../Interfaces/email_'
import * as hogan from 'hogan.js'
import fs from 'fs'
import  email_check, { validate } from 'email-validator'
import { email_send_invitation_group } from '../Interfaces/email_invitaion_interface'

const transporter=nodes.createTransport({
service:'gmail',
secure:false,
auth: {
user: "projectaws.contact@gmail.com",
pass: "123456789p_",
},


})

function email_option(owner:string,url:string,addition_info:string,to:string ){
var file_reader=fs.readFileSync('C:\\Users\\Projec784\\prom\\server\\database_AWs\\View_donwload.hjs','utf-8')
var compiler=hogan.compile(file_reader)
return   {
from: "Iset@info",
to: to+'',
subject: 'Download Link ',
html: compiler.render({url:url,reciever:to,owner:owner})
}} ;
let prom=new Promise<email_sender>((res ,rej)=>{



})

export async function send_email(email:email_sender ){

for await (const ele of email.emails){
let valid= email_check.validate(ele)
console.log(valid)
if(valid){
await  transporter.sendMail(email_option(email.owner,email.url,email.addition_info,ele))

}

else{
throw new Error("Email not valid")
}

}

}


export function email_group_invitation(owner:string,url:string,to:string,group_name:string){

  var file_reader=fs.readFileSync('C:\\Users\\Projec784\\prom\\server\\database_AWs\\email_invitaion.hjs','utf-8')
  var compiler=hogan.compile(file_reader)
  return   {
    from: "Iset@info",
    to: to+'',
    subject: 'Download Link ',
    html: compiler.render({url:url,reciever:to,owner:owner,groupname:group_name})
    }

}
export async function send_mail_inviation(emails:email_send_invitation_group){
  console.log("**********************")

  console.log(emails)
  for await (const ele of emails.emails){
    let valid= email_check.validate(ele)
    console.log(valid)
    if(valid){
    await  transporter.sendMail(email_group_invitation(emails.owner_name,emails.join_link,ele,emails.group_name))

    }

    else{
    throw new Error("Email not valid")
    }

    }
 }
