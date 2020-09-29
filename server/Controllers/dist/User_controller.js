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
exports.accept_inviation = exports.rename_group = exports.group_exist = exports.removegroup = exports.user_exist = exports.get_all_group = exports.get_other_user_info_by_email = exports.get_user_info = exports.createaccount = exports.login = void 0;
var bcrypt_1 = require("bcrypt");
var user_1 = require("../models/user");
var jsonwebtoken_1 = require("jsonwebtoken");
var mongoose_1 = require("mongoose");
var User_action_aws_1 = require("../database_AWs/User_action_aws");
var user_model_1 = require("../../src/app/models/user_model");
var Group_model_1 = require("../models/Group_model");
var Mongo_shared_functions_1 = require("../database_AWs/Mongo_shared_functions");
/**
* Esnsure the storage of Data by Aws
*/
var model = new User_action_aws_1.upload_to_aws("", "", null);
/**
* This method allows and ensures authentication and identification
* @param req request from the user
* @param res response to the user
* @param next
* @returns (Json || error )on the state of the entries in the user-generated request that contains the two authentication factors(login,password)
*/
function login(req, res, next) {
    user_1.User.find({ email: req.body.email }).exec().then(function (data) {
        if (data.length < 1) {
            res.status(200).json({
                message: "Email not found",
                value: false
            });
        }
        else {
            bcrypt_1["default"].compare(req.body.password, data[0].get('password')).then(function (password_coorect) {
                if (password_coorect) {
                    var token = jsonwebtoken_1["default"].sign({
                        email: req.body.email,
                        user_id: data[0]._id
                    }, "secret", {
                        expiresIn: '1h'
                    });
                    req.session.token = token;
                    res.status(200).json({ token: token });
                }
                else {
                    res.status(200).json({
                        message: "Password  faild", value: false
                    });
                }
            });
        }
    });
}
exports.login = login;
/**
* This method allows to create new account
* @param req request from the user
* @param res response to the user
* @param next
* @returns (Json || error )on the state of the entries in the user-generated request that contains the two authentication factors(login,password)
*/
function createaccount(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.User.find({ email: req.body.email }).exec().then(function (data) {
                        if (data.length >= 1) {
                            res.status(401).json({ message: 'error email exist' });
                        }
                        else {
                            var _password_crypted = bcrypt_1["default"].hash(req.body.password, 10).then(function (_cypted_pass) {
                                var id_image = (new mongoose_1.mongo.ObjectId());
                                var user = new user_1.User({
                                    _id: new mongoose_1.mongo.ObjectId(),
                                    email: req.body.email,
                                    password: _cypted_pass,
                                    age: new Date(),
                                    sexe: req.body.sexe,
                                    username: req.body.user_name,
                                    image: id_image
                                }).save().then(function (_current_user) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, model.create_bucket(_current_user._id + "").then(function () {
                                                    var mode = new User_action_aws_1.upload_to_aws(_current_user.id, "", [{ aws_data: { data: req.body.image, name: _current_user._id + "/" + id_image + '.png', type: '', buket_name: "usersprofile" } }]);
                                                    mode.upload_image(_current_user._id, null);
                                                })];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/, _current_user];
                                        }
                                    });
                                }); }).then(function (_current_user) { return __awaiter(_this, void 0, void 0, function () {
                                    var token;
                                    return __generator(this, function (_a) {
                                        token = jsonwebtoken_1["default"].sign({ email: req.body.email, user_id: _current_user._id }, 'secret', { expiresIn: '1h' });
                                        res.status(200).json({
                                            message: 'user_added',
                                            value: true, data: user, Token: token
                                        });
                                        return [2 /*return*/];
                                    });
                                }); });
                            });
                        }
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.createaccount = createaccount;
/**
* This method allows the user info
* @param req request from the user
* @param res response to the user
* @param next
* @returns the basic user info
*/
function get_user_info(req, res, next) {
    var _User_token_data = Get_token_parametre((req.headers.authorization + "").split(' ')[1]);
    var id = _User_token_data.user_id;
    user_1.User.findById(id).exec().then(function (user) {
        var _User_ = user;
        model.get_object_link('usersprofile', _User_._id + "/" + _User_.image + ".png").then(function (data) {
            _User_.image = data;
            res.status(200).json(user);
        });
    });
}
exports.get_user_info = get_user_info;
/**
*
* @param req
* @param res
* @param nex
*/
function get_other_user_info_by_email(req, res, nex) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.User.findOne({ email: req.query.email }).exec().then(function (user) { return __awaiter(_this, void 0, void 0, function () {
                        var _User_;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _User_ = user;
                                    _User_.user_name = user.get('username');
                                    return [4 /*yield*/, model.get_object_link('usersprofile', _User_._id + "/" + _User_.image + ".png").then(function (data) {
                                            var user = new user_model_1.user_class();
                                            user._id = _User_._id;
                                            user.image = data;
                                            user.user_name = _User_.user_name;
                                            user.email = _User_.email;
                                            res.status(200).json(user);
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })["catch"](function (err) {
                        res.status(200).json(err);
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.get_other_user_info_by_email = get_other_user_info_by_email;
function get_all_group(req, res, nex) {
    return __awaiter(this, void 0, void 0, function () {
        var _User_token_data, id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _User_token_data = Get_token_parametre((req.headers.authorization + "").split(' ')[1]);
                    id = _User_token_data.user_id;
                    return [4 /*yield*/, Mongo_shared_functions_1.get_all_groups(id).then(function (data) {
                            res.status(200).json(data);
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.get_all_group = get_all_group;
/**
 *
 * @param req
 * @param res
 * @param nex
 */
function user_exist(req, res, nex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, user_1.User.exists({ email: req.query.email }).then(function (data) {
                        res.status(200).json({ data: data });
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.user_exist = user_exist;
function removegroup(req, res, nex) {
    var group_id = req.body.groupid;
    var _User_token_data = Get_token_parametre((req.headers.authorization + "").split(' ')[1]);
    return Mongo_shared_functions_1.destroygroup(_User_token_data.user_id, group_id).then(function (data) {
        res.status(200).json({ message: data });
    });
}
exports.removegroup = removegroup;
function group_exist(req, res, nex) {
    return __awaiter(this, void 0, void 0, function () {
        var _User_token_data, groupname;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _User_token_data = Get_token_parametre((req.headers.authorization + "").split(' ')[1]);
                    groupname = req.query.groupname;
                    console.log(req.query.groupname + "zzzzzzzzzzzzzzz");
                    return [4 /*yield*/, Group_model_1.groupmodel.exists({ _id: _User_token_data.user_id, "groups.goroup_name": groupname }, function (err, val) {
                            res.status(200).json({ data: val });
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.group_exist = group_exist;
function rename_group(req, res, nex) {
    var group_id = req.body.groupid;
    var new_group_name = req.body.groupname;
    var _User_token_data = Get_token_parametre((req.headers.authorization + "").split(' ')[1]);
    return Mongo_shared_functions_1.rename_group_user(_User_token_data.user_id, group_id, new_group_name).then(function (data) {
        res.status(200).json({ message: data });
    })["catch"](function (eer) { res.status(200).json({ message: eer }); });
}
exports.rename_group = rename_group;
function accept_inviation(req, res, nex) {
}
exports.accept_inviation = accept_inviation;
/**
 *
 * @param Token
 */
function Get_token_parametre(Token) {
    console.log(Token, "token");
    var data = jsonwebtoken_1["default"].decode(Token);
    console.log(data);
    return data;
}
