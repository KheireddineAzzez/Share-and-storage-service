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
exports.__esModule = true;
exports.create_shared_folder = exports.upload_shared_file = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var User_action_aws_1 = require("../database_AWs/User_action_aws");
var User_socket_1 = require("../sockets/User_socket");
var model_AWS = new User_action_aws_1.upload_to_aws("", "", null);
function upload_shared_file(req, res, nex) {
    return __awaiter(this, void 0, void 0, function () {
        var _userinfo, folder_token, Filed_uploaded, Aws_file, foldershare;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _userinfo = jsonwebtoken_1["default"].decode((req.headers.authorization + "").split(' ')[1]);
                    console.log("ddddddddddddd12333");
                    folder_token = req.body.token;
                    console.log("*****************", folder_token);
                    Filed_uploaded = req.body.Files;
                    console.log(Filed_uploaded);
                    Aws_file = new User_action_aws_1.upload_to_aws("", "", Filed_uploaded);
                    foldershare = jsonwebtoken_1["default"].decode((folder_token))._Data_req_body;
                    return [4 /*yield*/, Aws_file.upload_image(foldershare._owner, null).then(function () {
                            res.status(200).json({ message: "seccesfly uploaded shared folde" });
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.upload_shared_file = upload_shared_file;
function create_shared_folder(req, res, nex) {
    var folder_name = req.body.foldersharename + "";
    var _User_token_data = Get_token_parametre((req.headers.authorization + "").split(' ')[1]);
    var folder_share = jsonwebtoken_1["default"].decode(req.body.token)._Data_req_body;
    console.log(folder_share, "done");
    console.log(folder_name + "");
    model_AWS.create_folder(folder_share._owner, folder_name + "/").then(function () {
        User_socket_1.user_sockets.send_table_data_real_time(folder_share._owner, folder_name); //emit to  socket io
        res.status(200).json({ message: 'insert correct', value: true });
    }).then(function () { })["catch"](function (err) { return res.status(200).json({ message: err, value: false }); });
}
exports.create_shared_folder = create_shared_folder;
function Get_token_parametre(Token) {
    console.log(Token, "token");
    var data = jsonwebtoken_1["default"].decode(Token);
    console.log(data);
    return data;
}
