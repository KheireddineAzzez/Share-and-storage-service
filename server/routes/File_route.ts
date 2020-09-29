import express from 'express'
import {Verified_authorization, Verified_access_folder} from '../middleware/Middel_session'
import {upload_to_aws} from '../database_AWs/User_action_aws'
import {upload,get_file_link,get_expire_link, verifie_folder_exist,get_data_access,generate_link_access, getallfolders,get_all_group} from '../Controllers/Bucket_controller'
const router=express.Router();

router.post('/upload',Verified_authorization,upload)



router.get('/fileLink',Verified_authorization,get_file_link)

router.post('/Accesslink',Verified_authorization,generate_link_access)
router.get('/fileexpirelink',Verified_authorization,get_expire_link)
router.get('/data',get_all_group)

/**
 *@description Two middlewares (1->have a current login account 2->Folder has a correctly authorization)
 */
router.post('/Acessfolder',Verified_authorization,Verified_access_folder,get_data_access)
export default router;
