import { token_user } from "../Interfaces/Token_interface"
import { read } from "../models/read"
import { User } from "../models/user"
import { write } from "../models/write"
import jwt from 'jsonwebtoken'

/**
         * This method allows the data treatment depends on your Actions(Delete,Upload.....) For the Charts
         * @param req request from the user
         * @param res response to the user
         * @param next
         * @returns Array of your Actions
         */

export async function Chart_Data(req,res,next){
let _bucket_name=Get_token_parametre((req.headers.authorization+"").split(' ')[1]).user_id
let Data_char={chart_write:new Array<write>(),chart_read: new Array<read>()}
await    User.findById(_bucket_name).exec().then(data=>{
Data_char.chart_write= (data.get('Write')   as Array<write>).filter((val)=>{if(val.Date>=get_current_week_data().firstdate
&&val.Date<= get_current_week_data().lastday){
return val
}}).sort((vl)=>vl.Date.getDate() -vl.Date.getDate())
return Data_char
}).then((data_chart)=>{
res.status(200).json(Data_char)
})

}






























function get_current_week_data(){

  var curr = new Date;
  var first = curr.getDate() - curr.getDay();
  var last = first + 6;

  var firstday = new Date(curr.setDate(first))
  var lastday = new Date(curr.setDate(last))

 return {firstdate:firstday,lastday:lastday}
 }

 function Get_token_parametre(Token:string){
  console.log(Token,"token")
var data= jwt.decode(Token) as token_user
console.log(data)
return data
}
