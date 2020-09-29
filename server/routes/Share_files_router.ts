import express from 'express'
import {upload_to_aws} from '../database_AWs/User_action_aws'
import {Verified_authorization} from '../middleware/Middel_session'
import {createaccount,login,get_user_info} from '../Controllers/User_controller'
import {get_bucket_data,Delete_file,verifie_folder_exist,rename_file,Zip_Files,create_folder} from '../Controllers/Bucket_controller'
import {upload_shared_file,create_shared_folder} from '../Controllers/Shared_controller'

 const router=express.Router();



router.post('/uploadsharedfile',upload_shared_file)

  router.post('/createsharedfolder',create_shared_folder)


  router.post('/Downloadsharedfiles');


export default router;
