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
exports.rename_group_user = exports.destroygroup = exports.person_accept_invitation = exports.create_group = exports.make_folder_in_sharing_mode = exports.delete_folder_data = exports.get_all_groups = exports.get_user_folder = exports.Save_user_folder = void 0;
var mongoose_1 = require("mongoose");
var Folder_model_1 = require("../models/Folder_model");
var mongoose_2 = require("mongoose");
var Group_model_1 = require("../models/Group_model");
var Group_access_1 = require("../../src/app/models/Group_access");
var Enum_folders_1 = require("../../src/app/models/enums/Enum_folders");
function Save_user_folder(foldershare, user_id) {
    return __awaiter(this, void 0, void 0, function () {
        var folder_id, folders;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    folder_id = new mongoose_1["default"].Types.ObjectId();
                    foldershare.id = folder_id.toHexString();
                    folders = new Array();
                    return [4 /*yield*/, Folder_model_1.folder.findOne({ _iduser: user_id })];
                case 1:
                    if (!_a.sent()) return [3 /*break*/, 3];
                    return [4 /*yield*/, Folder_model_1.folder.update({ _iduser: user_id }, { $push: { folders: foldershare } })];
                case 2: return [2 /*return*/, _a.sent()];
                case 3:
                    folders.push(foldershare);
                    return [2 /*return*/, new Folder_model_1.folder({
                            _id: folder_id,
                            _iduser: new mongoose_2.mongo.ObjectId(user_id),
                            folders: folders
                        }).save().then(function (data) { return foldershare; })];
            }
        });
    });
}
exports.Save_user_folder = Save_user_folder;
var BreakException = {};
function get_user_folder(folder_name, user_id) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Folder_model_1.folder.findOne({ _iduser: user_id }).exec().then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                        var data_model, data_model_1, data_model_1_1, ele, e_1_1;
                        var e_1, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    data_model = data.get('folders');
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 6, 7, 12]);
                                    data_model_1 = __asyncValues(data_model);
                                    _b.label = 2;
                                case 2: return [4 /*yield*/, data_model_1.next()];
                                case 3:
                                    if (!(data_model_1_1 = _b.sent(), !data_model_1_1.done)) return [3 /*break*/, 5];
                                    ele = data_model_1_1.value;
                                    if (ele.nom == folder_name) {
                                        return [2 /*return*/, ele];
                                    }
                                    _b.label = 4;
                                case 4: return [3 /*break*/, 2];
                                case 5: return [3 /*break*/, 12];
                                case 6:
                                    e_1_1 = _b.sent();
                                    e_1 = { error: e_1_1 };
                                    return [3 /*break*/, 12];
                                case 7:
                                    _b.trys.push([7, , 10, 11]);
                                    if (!(data_model_1_1 && !data_model_1_1.done && (_a = data_model_1["return"]))) return [3 /*break*/, 9];
                                    return [4 /*yield*/, _a.call(data_model_1)];
                                case 8:
                                    _b.sent();
                                    _b.label = 9;
                                case 9: return [3 /*break*/, 11];
                                case 10:
                                    if (e_1) throw e_1.error;
                                    return [7 /*endfinally*/];
                                case 11: return [7 /*endfinally*/];
                                case 12: return [2 /*return*/];
                            }
                        });
                    }); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.get_user_folder = get_user_folder;
function get_all_groups(user_id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Group_model_1.groupmodel.findOne({ _id: user_id }).exec().then(function (data) {
                        var groups = data.get('groups');
                        var private_group = groups.filter(function (val) { return val.Access == Enum_folders_1.folder_classification.Private; });
                        var public_group = groups.filter(function (val) { return val.Access == Enum_folders_1.folder_classification.public; });
                        var group_format = new Object();
                        group_format.private_group = private_group;
                        group_format.public_group = public_group;
                        return group_format;
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.get_all_groups = get_all_groups;
function delete_folder_data(Folders, user_id) {
    var Folders_1, Folders_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var ele, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 6, 7, 12]);
                    Folders_1 = __asyncValues(Folders);
                    _b.label = 1;
                case 1: return [4 /*yield*/, Folders_1.next()];
                case 2:
                    if (!(Folders_1_1 = _b.sent(), !Folders_1_1.done)) return [3 /*break*/, 5];
                    ele = Folders_1_1.value;
                    return [4 /*yield*/, Folder_model_1.folder.updateOne({ _iduser: user_id }, { $pull: { folders: { id: ele.id } } })];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4: return [3 /*break*/, 1];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _b.trys.push([7, , 10, 11]);
                    if (!(Folders_1_1 && !Folders_1_1.done && (_a = Folders_1["return"]))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(Folders_1)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [2 /*return*/];
            }
        });
    });
}
exports.delete_folder_data = delete_folder_data;
function make_folder_in_sharing_mode(Folder, user_id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Folder_model_1.folder.update({ _iduser: user_id, "folders.id": Folder.id }, { $set: { folders: {} } }).exec()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.make_folder_in_sharing_mode = make_folder_in_sharing_mode;
function create_group(user_id, Sharedfodler) {
    return __awaiter(this, void 0, void 0, function () {
        var object_id, new_group, group_array;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    object_id = new mongoose_2.mongo.ObjectId(user_id);
                    new_group = new Group_access_1.group();
                    new_group.goroup_name = Sharedfodler.group_name;
                    new_group.group_id = Sharedfodler.group_id;
                    new_group.folder_id = Sharedfodler.id;
                    new_group.Creation_date = new Date();
                    new_group.Members = new Array();
                    Sharedfodler._authorization_emails.forEach(function (val) {
                        new_group.Members.push({ email: val, accepted: false });
                    });
                    new_group.token = Sharedfodler._token;
                    console.log(new_group);
                    if (Sharedfodler._classification == 'private') {
                        new_group.Access = Enum_folders_1.folder_classification.Private;
                    }
                    else {
                        new_group.Access = Enum_folders_1.folder_classification.public;
                    }
                    group_array = new Array();
                    group_array.push(new_group);
                    return [4 /*yield*/, Group_model_1.groupmodel.findOne({ _id: user_id })];
                case 1:
                    if (!_a.sent()) return [3 /*break*/, 3];
                    return [4 /*yield*/, Group_model_1.groupmodel.update({ _id: user_id }, { $push: { groups: new_group } })];
                case 2: return [2 /*return*/, _a.sent()];
                case 3: return [4 /*yield*/, new Group_model_1.groupmodel({
                        _id: object_id,
                        groups: group_array
                    }).save().then(function (data) { return data; })];
                case 4: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.create_group = create_group;
function person_accept_invitation(groupid, person_email, user_id) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(groupid + person_email + user_id);
                    return [4 /*yield*/, Group_model_1.groupmodel.findOne({ _id: user_id }).exec().then(function (data) {
                            var groups = data.get('groups');
                            groups.forEach(function (ele) {
                                if (ele.group_id == groupid) {
                                    ele.Members.forEach(function (el) {
                                        if (el.email == person_email) {
                                            el.accepted = true;
                                        }
                                    });
                                }
                            });
                            return groups;
                        }).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, Group_model_1.groupmodel.update({ _id: user_id }, { $set: { groups: data } })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.person_accept_invitation = person_accept_invitation;
function destroygroup(userid, groupid) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Group_model_1.groupmodel.updateOne({ _id: userid }, { $pull: { groups: { group_id: groupid } } }).then(function () {
                        return "your group has been deleted";
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.destroygroup = destroygroup;
function rename_group_user(user_id, group_id, group_name) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(group_name);
                    return [4 /*yield*/, Group_model_1.groupmodel.findOne({ _id: user_id, "groups.group_id": group_id }).exec().then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var data_groups;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data_groups = data.get('groups');
                                        data_groups.forEach(function (ele) {
                                            if (ele.group_id == group_id) {
                                                ele.goroup_name = group_name;
                                            }
                                        });
                                        return [4 /*yield*/, Group_model_1.groupmodel.updateOne({ _id: user_id }, { $set: { groups: data_groups } })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.rename_group_user = rename_group_user;
