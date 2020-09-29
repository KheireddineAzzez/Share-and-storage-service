import mongose, { mongo } from 'mongoose'
import {read} from './read'
import {write} from './write'
import {Foldershare as fol_share  } from '../../src/app/models/foldershare'
import { Foldermodel } from '../../src/app/models/foldermodel'
const Folder=new mongose.Schema({
  _iduser:{type: mongose.Schema.Types.ObjectId,ref:'User'},
folders: {type:mongose.Schema.Types.Array}

 })

export const folder=mongose.model('Folders',Folder)
