import express from 'express'
import {upload_to_aws} from '../database_AWs/User_action_aws'
import {Verified_authorization} from '../middleware/Middel_session'
import {createaccount,login,get_user_info, get_all_group,get_other_user_info_by_email,user_exist, removegroup, group_exist, rename_group, accept_inviation} from '../Controllers/User_controller'
import {get_bucket_data,Delete_file,verifie_folder_exist,rename_file,Zip_Files,create_folder} from '../Controllers/Bucket_controller'
import {send_mail} from '../Controllers/Mail_controllers'
import {Chart_Data} from '../Controllers/Chart_controller'
const router=express.Router();
const model =new upload_to_aws("","",null);

router.post('/createaccount',createaccount )

router.post('/login',login)


router.get("/get_buckets_data",Verified_authorization,get_bucket_data)

router.post('/createfolder',Verified_authorization,create_folder)

router.post('/sendmail',Verified_authorization,send_mail)


router.get('/user_info',Verified_authorization,get_user_info)



router.post('/Deletefiles',Verified_authorization,Delete_file)


router.post('/renamefile',Verified_authorization,rename_file)


router.post('/verifyfolder',Verified_authorization,verifie_folder_exist)


router.post('/zipedfiles',Verified_authorization,Zip_Files)


router.get('/chart_user',Verified_authorization,Chart_Data)

router.get('/tokenverification',Verified_authorization)

router.post('/deletegroup',Verified_authorization,removegroup)
router.get('/groups',Verified_authorization,get_all_group)
router.get('/userbyemail',Verified_authorization,get_other_user_info_by_email)
router.get('/userexist',Verified_authorization,user_exist)
router.get('/groupexist',Verified_authorization,group_exist)
router.post('/renamegroup',Verified_authorization,rename_group)

router.post('/acceptinvitaion',Verified_authorization,accept_inviation)





export default router;

