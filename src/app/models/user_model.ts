import { read } from '../../../server/models/read'
import { write } from '../../../server/models/write'

export  class user_class{
  _id?:string
  user_name?:string=""
  email?:string=""
  password?:string=""
  age?=new Date()
  sexe?:string=""
  phone?:number
  image?:string=""
  Write?:Array<write>
  read?:Array<read>

}
