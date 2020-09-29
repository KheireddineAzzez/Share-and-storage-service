"use strict";
exports.__esModule = true;
var express_1 = require("express");
var jsonwebtoken_1 = require("jsonwebtoken");
var User_action_aws_1 = require("../database/User_action_aws");
var router = express_1["default"].Router();
var mode_aws = new User_action_aws_1.upload_to_aws("", "", [{ aws_data: null }]);
router.post('/upload', function (req, res, nex) {
    var data = req.body;
    var Aws_file = new User_action_aws_1.upload_to_aws("", "", data);
    Aws_file.upload_image(null).then(function () {
    });
    res.status(200).json({ message: req.body, dz: "dsd" });
});
router.get('/fileLink', function (req, rs, nex) {
    var prefix = req.query.prefix;
    var bucket_name = req.query.bucket_name;
    mode_aws.get_object_link(bucket_name + "", prefix + "").then(function (data) {
        var token_file = jsonwebtoken_1["default"].sign(data, "secretbag");
        console.log(token_file);
        rs.status(200).json({ file_link: data, prefix: prefix, bucket: bucket_name });
    });
});
router.get('/fileexpirelink', function (req, res, nex) {
    var prefix = req.query.prefix;
    var bucket_name = req.query.bucket_name;
    var expire_date = Number(req.query.expiretime);
    mode_aws.get_expire_link(bucket_name + "", prefix + "", expire_date).then(function (data) {
        res.status(200).json({ file_link: data, prefix: prefix, bucket: bucket_name });
    });
});
exports["default"] = router;
