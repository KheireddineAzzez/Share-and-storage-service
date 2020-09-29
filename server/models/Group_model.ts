import mongose, { mongo } from 'mongoose'
import {read} from './read'
import {write} from './write'
import {Foldershare as fol_share  } from '../../src/app/models/foldershare'
import { Foldermodel } from '../../src/app/models/foldermodel'
import { group } from '../../src/app/models/Group_access'
const Group=new mongose.Schema({
  _id:mongose.Schema.Types.ObjectId,
   groups:{type:Array<group>()}

 })

export const groupmodel=mongose.model('groups',Group)
