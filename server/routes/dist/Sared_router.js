"use strict";
exports.__esModule = true;
var express_1 = require("express");
var Shared_controller_1 = require("../Controllers/Shared_controller");
var router = express_1["default"].Router();
router.post('/uploadsharedfile', Shared_controller_1.upload_shared_file);
router.post('/createsharedfolder', Shared_controller_1.create_shared_folder);
router.post('/Downloadsharedfiles');
exports["default"] = router;
