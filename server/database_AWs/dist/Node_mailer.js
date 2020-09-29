"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
exports.__esModule = true;
exports.send_mail_inviation = exports.email_group_invitation = exports.send_email = void 0;
var nodemailer_1 = require("nodemailer");
var hogan = require("hogan.js");
var fs_1 = require("fs");
var email_validator_1 = require("email-validator");
var transporter = nodemailer_1["default"].createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: "projectaws.contact@gmail.com",
        pass: "123456789p_"
    }
});
function email_option(owner, url, addition_info, to) {
    var file_reader = fs_1["default"].readFileSync('C:\\Users\\Projec784\\prom\\server\\database_AWs\\View_donwload.hjs', 'utf-8');
    var compiler = hogan.compile(file_reader);
    return {
        from: "Iset@info",
        to: to + '',
        subject: 'Download Link ',
        html: compiler.render({ url: url, reciever: to, owner: owner })
    };
}
;
var prom = new Promise(function (res, rej) {
});
function send_email(email) {
    var e_1, _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, ele, valid, e_1_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 7, 8, 13]);
                    _b = __asyncValues(email.emails);
                    _d.label = 1;
                case 1: return [4 /*yield*/, _b.next()];
                case 2:
                    if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 6];
                    ele = _c.value;
                    valid = email_validator_1["default"].validate(ele);
                    console.log(valid);
                    if (!valid) return [3 /*break*/, 4];
                    return [4 /*yield*/, transporter.sendMail(email_option(email.owner, email.url, email.addition_info, ele))];
                case 3:
                    _d.sent();
                    return [3 /*break*/, 5];
                case 4: throw new Error("Email not valid");
                case 5: return [3 /*break*/, 1];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_c && !_c.done && (_a = _b["return"]))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _a.call(_b)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [2 /*return*/];
            }
        });
    });
}
exports.send_email = send_email;
function email_group_invitation(owner, url, to, group_name) {
    var file_reader = fs_1["default"].readFileSync('C:\\Users\\Projec784\\prom\\server\\database_AWs\\email_invitaion.hjs', 'utf-8');
    var compiler = hogan.compile(file_reader);
    return {
        from: "Iset@info",
        to: to + '',
        subject: 'Download Link ',
        html: compiler.render({ url: url, reciever: to, owner: owner, groupname: group_name })
    };
}
exports.email_group_invitation = email_group_invitation;
function send_mail_inviation(emails) {
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c, ele, valid, e_2_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log("**********************");
                    console.log(emails);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 8, 9, 14]);
                    _b = __asyncValues(emails.emails);
                    _d.label = 2;
                case 2: return [4 /*yield*/, _b.next()];
                case 3:
                    if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 7];
                    ele = _c.value;
                    valid = email_validator_1["default"].validate(ele);
                    console.log(valid);
                    if (!valid) return [3 /*break*/, 5];
                    return [4 /*yield*/, transporter.sendMail(email_group_invitation(emails.owner_name, emails.join_link, ele, emails.group_name))];
                case 4:
                    _d.sent();
                    return [3 /*break*/, 6];
                case 5: throw new Error("Email not valid");
                case 6: return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 14];
                case 8:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 14];
                case 9:
                    _d.trys.push([9, , 12, 13]);
                    if (!(_c && !_c.done && (_a = _b["return"]))) return [3 /*break*/, 11];
                    return [4 /*yield*/, _a.call(_b)];
                case 10:
                    _d.sent();
                    _d.label = 11;
                case 11: return [3 /*break*/, 13];
                case 12:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 13: return [7 /*endfinally*/];
                case 14: return [2 /*return*/];
            }
        });
    });
}
exports.send_mail_inviation = send_mail_inviation;
