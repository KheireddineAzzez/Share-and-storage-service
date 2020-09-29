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
exports.get_data_access = exports.generate_link_access = exports.get_expire_link = exports.get_file_link = exports.upload = exports.Zip_Files = exports.verifie_folder_exist = exports.rename_file = exports.Delete_file = exports.create_folder = exports.get_all_group = exports.getallfolders = exports.get_bucket_data = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var User_action_aws_1 = require("../database_AWs/User_action_aws");
var filemodel_1 = require("../../src/app/models/filemodel");
var foldermodel_1 = require("../../src/app/models/foldermodel");
var User_socket_1 = require("../sockets/User_socket");
var foldershare_1 = require("../../src/app/models/foldershare");
var File_share_1 = require("../../src/app/models/File_share");
var Folder_model_1 = require("../models/Folder_model");
var mongoose_1 = require("mongoose");
var Group_model_1 = require("../models/Group_model");
var Mongo_shared_functions_1 = require("../database_AWs/Mongo_shared_functions");
var Mongo_shared_functions_2 = require("../database_AWs/Mongo_shared_functions");
var Node_mailer_1 = require("../database_AWs/Node_mailer");
/**
 * Esnsure the storage of Data by Aws
 */
var model = new User_action_aws_1.upload_to_aws("", "", null);
/**
 * @description This method allows recieving the Data from your bucket
 * @param req request from the user
 * @param res response to the user
 * @param next
 * @returns Array of folders that contains all your data under your prefix inserted in the request
 */
function get_bucket_data(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var arr_files, arr_foldes, _User_token_data;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    arr_files = new Array();
                    arr_foldes = new Array();
                    _User_token_data = Get_token_parametre((req.headers.authorization + "").split(' ')[1]);
                    return [4 /*yield*/, model.get_bucket_list(_User_token_data.user_id + "", req.query.prefix + "", req.query.del + "").then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b, el, e_1_1;
                            var e_1, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        _d.trys.push([0, 6, 7, 12]);
                                        _a = __asyncValues(data.CommonPrefixes);
                                        _d.label = 1;
                                    case 1: return [4 /*yield*/, _a.next()];
                                    case 2:
                                        if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                                        el = _b.value;
                                        return [4 /*yield*/, Mongo_shared_functions_2.get_user_folder(el.Prefix, _User_token_data.user_id).then(function (folder_id) {
                                                var folder = new foldermodel_1.Foldermodel(el.Prefix, null, "folder");
                                                if (folder_id != null) {
                                                    folder.id = folder_id.id;
                                                    folder.date = folder_id.date;
                                                    console.log(folder);
                                                }
                                                folder.checked = false;
                                                arr_foldes.push(folder);
                                            })];
                                    case 3:
                                        _d.sent();
                                        _d.label = 4;
                                    case 4: return [3 /*break*/, 1];
                                    case 5: return [3 /*break*/, 12];
                                    case 6:
                                        e_1_1 = _d.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 12];
                                    case 7:
                                        _d.trys.push([7, , 10, 11]);
                                        if (!(_b && !_b.done && (_c = _a["return"]))) return [3 /*break*/, 9];
                                        return [4 /*yield*/, _c.call(_a)];
                                    case 8:
                                        _d.sent();
                                        _d.label = 9;
                                    case 9: return [3 /*break*/, 11];
                                    case 10:
                                        if (e_1) throw e_1.error;
                                        return [7 /*endfinally*/];
                                    case 11: return [7 /*endfinally*/];
                                    case 12:
                                        data.Contents.forEach(function (ele) {
                                            var type = filter_file_type(ele.Key);
                                            arr_foldes.push(new filemodel_1.Filemodel(ele.Key, ele.LastModified, (ele.Size / 1000), type));
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); }).then(function () {
                            res.status(200).json(arr_foldes);
                        })["catch"](function (err) { res.status(200).json({ message: "err" }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.get_bucket_data = get_bucket_data;
/**
 * @description  This method allows to create a new folder
 * @param req
 * @param res
 * @param nex
 */
function getallfolders(req, res, nex) {
    return Folder_model_1.folder.find().exec().then(function (data) {
        res.status(200).json({ message: data });
    });
}
exports.getallfolders = getallfolders;
function get_all_group(req, res, nex) {
    return Group_model_1.groupmodel.find({}).exec().then(function (data) {
        res.status(200).json(data);
    });
}
exports.get_all_group = get_all_group;
function create_folder(req, res, nex) {
    return __awaiter(this, void 0, void 0, function () {
        var folder_name, _User_token_data;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    folder_name = req.body.foldername;
                    _User_token_data = Get_token_parametre((req.headers.authorization + "").split(' ')[1]);
                    console.log(_User_token_data);
                    return [4 /*yield*/, model.create_folder(_User_token_data.user_id, folder_name).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var folder;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        folder = new foldermodel_1.Foldermodel(folder_name, new Date(), 'folder');
                                        return [4 /*yield*/, Mongo_shared_functions_2.Save_user_folder(folder, _User_token_data.user_id).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, User_socket_1.user_sockets.send_table_data_real_time(_User_token_data.user_id, folder_name).then(function () {
                                                                res.status(200).json({ message: 'insert correct', value: true });
                                                            })]; //emit to  socket io
                                                        case 1:
                                                            _a.sent(); //emit to  socket io
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })["catch"](function (err) { return res.status(200).json({ message: err, value: false }); })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.create_folder = create_folder;
/**
 *@description  This method allows to Delete the selected Files or folders
* @param req request from the user
* @param res response to the user
* @param next
* @returns Success response || Faild response
*/
function Delete_file(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _User_token_data, _Files, _bucket_name, _folder_name;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _User_token_data = Get_token_parametre((req.headers.authorization + "").split(' ')[1]);
                    _Files = req.body.Files;
                    _bucket_name = _User_token_data.user_id + "";
                    _folder_name = _Files[0].nom;
                    return [4 /*yield*/, model.delete_files(_Files, _bucket_name).then(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Mongo_shared_functions_1.delete_folder_data(_Files, _bucket_name).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                User_socket_1.user_sockets.send_table_data_real_time(_bucket_name, _folder_name);
                                                return [2 /*return*/];
                                            });
                                        }); })];
                                    case 1:
                                        _a.sent();
                                        res.status(200).json({ message: "successfully deleted " });
                                        return [2 /*return*/];
                                }
                            });
                        }); })["catch"](function (err) {
                            res.status(200).json({ error: err });
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.Delete_file = Delete_file;
/**
 *@description  This method allows to rename a specific file
* @param req request from the user
* @param res response to the user
* @param next
* @returns  Success response || faild response
*/
function rename_file(req, res, nex) {
    var _User_token_data = Get_token_parametre((req.headers.authorization + "").split(' ')[1]);
    var _bucket_name = _User_token_data.user_id;
    var _oldkey = req.body.oldkey;
    var _newkey = req.body.newkey;
    model.copy_folder(_bucket_name, _oldkey, _newkey).then(function () {
        User_socket_1.user_sockets.send_table_data_real_time(_bucket_name, _newkey);
        res.status(200).json({ message: 'done' });
    });
}
exports.rename_file = rename_file;
/**
 * @description This method allows   the file existance verification
 * @param req request from the user
 * @param res response to the user
 * @param next
 * @returns Json Message  containing a valid(true || false)
 */
function verifie_folder_exist(req, res, nex) {
    var _folder_name = req.body.foldername;
    var _User_token_data = Get_token_parametre((req.headers.authorization + "").split(' ')[1]);
    var id = "";
    if (req.body.sharedtoken != undefined) {
        var shared_folder = jsonwebtoken_1["default"].decode((req.body.sharedtoken));
        id = shared_folder._Data_req_body._owner;
    }
    else {
        id = _User_token_data.user_id;
        console.log("req done 2");
    }
    model.verfier_existance_file(id, _folder_name).then(function () {
        res.status(200).json({ message: 'error', value: false });
    })["catch"](function () {
        res.status(200).json({ message: 'valid', value: true });
    });
}
exports.verifie_folder_exist = verifie_folder_exist;
/**
 *@description  This method allows to compress an Array of a File or a Folder (Zip)
* @param req request from the user
* @param res response to the user
* @param next
* @returns Faild message(500) || success message
*/
function Zip_Files(req, res, nex) {
    var _files_keys = req.body.fileskey;
    var _bucket_name = Get_token_parametre((req.headers.authorization + "").split(' ')[1]).user_id;
    var _file = req.body.file;
    model.Ziped_files(_bucket_name, _files_keys, _file.nom).then(function (data) {
        User_socket_1.user_sockets.send_table_data_real_time(_bucket_name, _file.nom);
        res.status(200).json({ message: data });
    })["catch"](function (err) { return res(500).json({ messageerror: err }); });
}
exports.Zip_Files = Zip_Files;
/**
 *@description  This method allows to upload an Array of  a File
* @param req request from the user
* @param res response to the user
* @param next
* @returns Success message
*/
function upload(req, res, nex) {
    var data = req.body;
    var _bucket_name = Get_token_parametre((req.headers.authorization + "").split(' ')[1]).user_id;
    console.log(data[0].aws_data.buket_name + "ddddddddddddddddddddddd");
    var Aws_file = new User_action_aws_1.upload_to_aws("", "", data);
    Aws_file.upload_image(_bucket_name, null).then(function () {
    });
    res.status(200).json({ message: 'success' });
}
exports.upload = upload;
/**
 *@description  This method allows to generate a link for your file
* @param req request from the user
* @param res response to the user
* @param next
* @returns Json Message contain your link
*/
function get_file_link(req, res, nex) {
    var _prefix = req.query.prefix;
    var _bucket_name = Get_token_parametre((req.headers.authorization + "").split(' ')[1]).user_id;
    model.get_object_link(_bucket_name + "", _prefix + "").then(function (data) {
        res.status(200).json({ file_link: data });
    });
}
exports.get_file_link = get_file_link;
/**
 *@description  This method allows to generate  link with expiration date
* @param req request from the user
* @param res response to the user
* @param next
* @returns Json Message contain your link
*/
function get_expire_link(req, res, nex) {
    var _prefix = req.query.prefix;
    var _bucket_name = Get_token_parametre((req.headers.authorization + "").split(' ')[1]).user_id;
    var expire_date = Number(req.query.expiretime);
    model.get_expire_link(_bucket_name + "", _prefix + "", expire_date).then(function (data) {
        res.status(200).json({ file_link: data });
    });
}
exports.get_expire_link = get_expire_link;
/**
 * @description This method alows to generate Access link
 * @param req
 * @param res
 * @param nex
 */
function generate_link_access(req, res, nex) {
    return __awaiter(this, void 0, void 0, function () {
        var _Data_req_body, grou_id, _bucket_name, node_maier_object, _date_diff, token, token, token, err_1;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _Data_req_body = req.body.folder;
                    grou_id = new mongoose_1.mongo.ObjectId().toHexString();
                    _Data_req_body.group_id = grou_id;
                    console.log(_Data_req_body);
                    _bucket_name = Get_token_parametre((req.headers.authorization + "").split(' ')[1]).user_id;
                    node_maier_object = new Object();
                    node_maier_object.emails = _Data_req_body._authorization_emails;
                    node_maier_object.group_name = _Data_req_body.group_name;
                    node_maier_object.owner_name = Get_token_parametre((req.headers.authorization + "").split(' ')[1]).email;
                    node_maier_object.message = "";
                    node_maier_object.join_link = "";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 8, , 9]);
                    if (!(_Data_req_body._classification == 'private')) return [3 /*break*/, 6];
                    if (!_Data_req_body.date) return [3 /*break*/, 3];
                    _date_diff = (new Date(_Data_req_body.date).getTime() - Date.now()) / (1000);
                    console.log(_date_diff + "zzz time ***");
                    token = jsonwebtoken_1["default"].sign({ _Data_req_body: _Data_req_body }, "secret", { expiresIn: Math.ceil(_date_diff) });
                    _Data_req_body._token = token;
                    console.log(_Data_req_body);
                    console.log(node_maier_object);
                    return [4 /*yield*/, Mongo_shared_functions_2.create_group(_bucket_name, _Data_req_body).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Node_mailer_1.send_mail_inviation(node_maier_object).then(function () {
                                            res.status(200).json(_Data_req_body);
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    token = jsonwebtoken_1["default"].sign({ _Data_req_body: _Data_req_body }, "secret", { expiresIn: '365d' });
                    _Data_req_body._token = token;
                    console.log("private without email ");
                    _a.label = 4;
                case 4: return [4 /*yield*/, Mongo_shared_functions_2.create_group(_bucket_name, _Data_req_body).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(node_maier_object);
                                    return [4 /*yield*/, Node_mailer_1.send_mail_inviation(node_maier_object).then(function () {
                                            res.status(200).json(_Data_req_body);
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
                case 5: return [2 /*return*/, _a.sent()];
                case 6:
                    if (_Data_req_body._classification == 'public') {
                        token = jsonwebtoken_1["default"].sign({ _Data_req_body: _Data_req_body }, "secret", { expiresIn: '365d' });
                        _Data_req_body._token = token;
                        console.log("done 5");
                    }
                    _a.label = 7;
                case 7:
                    res.status("202").json(_Data_req_body);
                    return [3 /*break*/, 9];
                case 8:
                    err_1 = _a.sent();
                    res.status('400').send(err_1);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.generate_link_access = generate_link_access;
function get_data_access(req, res, nex) {
    var _Token_folder_access = jsonwebtoken_1["default"].decode(req.body.token);
    var _owner_id = _Token_folder_access._Data_req_body._owner;
    var _full_path = _Token_folder_access._Data_req_body.nom;
    return model.get_bucket_list(_owner_id, _full_path, "/").then(function (data) {
        console.log(data);
        var arr_foldes = new Array();
        data.CommonPrefixes.forEach(function (el) {
            var folder = new foldershare_1.Foldershare(el.Prefix, null, "", "", []);
            folder.type = 'folder';
            folder._classification = _Token_folder_access._Data_req_body._classification;
            console.log(folder._classification + "khayry azzez");
            folder._owner = _owner_id;
            folder.checked = false;
            var token = jsonwebtoken_1["default"].sign({ _Data_req_body: folder }, 'secret', { expiresIn: '365d' });
            folder._token = token;
            arr_foldes.push(folder);
        });
        data.Contents.forEach(function (ele) {
            var type = filter_file_type(ele.Key);
            var file = new File_share_1.file_share(ele.Key, ele.LastModified, (ele.Size / 1000), type);
            arr_foldes.push(file);
        });
        res.status(200).json({ data: arr_foldes, path_folder: _full_path });
    });
}
exports.get_data_access = get_data_access;
/** Token Handler */
function Get_token_parametre(Token) {
    console.log(Token, "token");
    var data = jsonwebtoken_1["default"].decode(Token);
    console.log(data);
    return data;
}
function filter_file_type(Filet_name) {
    if (Filet_name.includes('.mp4')) {
        return "video";
    }
    else if (Filet_name.includes('.docx')) {
        return 'word';
    }
    else if (Filet_name.includes('.mp3')) {
        return 'audio';
    }
    else if (Filet_name.includes('.txt')) {
        return 'text';
    }
    else if (Filet_name.includes('png') || Filet_name.includes('.jpg') || Filet_name.includes('.PNG')) {
        return 'image';
    }
    else if (Filet_name.includes('.zip')) {
        return 'zip';
    }
    else if (Filet_name.includes('.rar')) {
        return 'rar';
    }
}
