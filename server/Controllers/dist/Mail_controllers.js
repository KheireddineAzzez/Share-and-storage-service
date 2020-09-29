"use strict";
exports.__esModule = true;
exports.sendmailtojoingroup = exports.send_mail = void 0;
var Node_mailer_1 = require("../database_AWs/Node_mailer");
function send_mail(req, res, nex) {
    var Mails = req.body;
    Node_mailer_1.send_email(Mails).then(function () {
        res.status(200).json(Mails);
    })["catch"](function (err) { console.log(err); res.status(501).json(err.message); });
}
exports.send_mail = send_mail;
function sendmailtojoingroup(req, res, nex) {
    var emails_list = req.body.emails;
}
exports.sendmailtojoingroup = sendmailtojoingroup;
