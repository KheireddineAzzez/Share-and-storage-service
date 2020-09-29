"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Middel_session_1 = require("../middleware/Middel_session");
var Bucket_controller_1 = require("../Controllers/Bucket_controller");
var router = express_1["default"].Router();
router.post('/upload', Middel_session_1.Verified_authorization, Bucket_controller_1.upload);
router.get('/fileLink', Middel_session_1.Verified_authorization, Bucket_controller_1.get_file_link);
router.post('/Accesslink', Middel_session_1.Verified_authorization, Bucket_controller_1.generate_link_access);
router.get('/fileexpirelink', Middel_session_1.Verified_authorization, Bucket_controller_1.get_expire_link);
router.get('/data', Bucket_controller_1.get_all_group);
/**
 *@description Two middlewares (1->have a current login account 2->Folder has a correctly authorization)
 */
router.post('/Acessfolder', Middel_session_1.Verified_authorization, Middel_session_1.Verified_access_folder, Bucket_controller_1.get_data_access);
exports["default"] = router;
