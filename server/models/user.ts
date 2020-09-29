import mongose from 'mongoose'
import {read} from './read'
import {write} from './write'
import {Foldershare} from '../../src/app/models/foldershare'
const user= new mongose.Schema({
_id: {type:mongose.Schema.Types.ObjectId },
email:{required:true,type:String,unique:true},
password:{required:true,type:mongose.Schema.Types.String},
age:{required:true,type:mongose.Schema.Types.String},
sexe:{type:mongose.Schema.Types.String},
username:{required:true,type:mongose.Schema.Types.String},
image:{required:true,type:mongose.Schema.Types.String}  ,
read:{type: Array<read>()},
Write:{type: Array<write>()},
shares_folders:{type:Array< Foldershare>()}
})

export const User=mongose.model('User',user)
