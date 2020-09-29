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
exports.user_sockets = void 0;
var socket_io_1 = require("socket.io");
var filemodel_1 = require("../../src/app/models/filemodel");
var foldermodel_1 = require("../../src/app/models/foldermodel");
var user_1 = require("../models/user");
var Mongo_shared_functions_1 = require("../database_AWs/Mongo_shared_functions");
/**
 *@class (user_sockets)  This class ensures the real time of  data and actions
 *@param  server server of  My api
 */
var user_sockets = /** @class */ (function () {
    function user_sockets(server, path) {
        server = server;
        this._Path = path;
    }
    /**
     * This method connects and joins the socket broadcast
     */
    user_sockets.listen_to_real_time = function () {
        var _this = this;
        socket_io_1["default"](this._server).on('connection', function (socket) {
            if (!_this.Socket) {
                _this.Socket = socket;
            }
            socket.on('switchtorealtime', function (date) {
                socket.join(date.id.trim());
            });
        });
    };
    /**
     *@param word the prefix
     * @returns Array  occurrences positions
     */
    user_sockets.ocurance = function (word) {
        var _Array_of_ocurrence = new Array();
        for (var index = 0; index <= word.length; index++) {
            if (word[index] == '/') {
                _Array_of_ocurrence.push(index);
            }
        }
        return _Array_of_ocurrence;
    };
    /**
     * This method ensures the broadcasting of the user modified data
     *
     *
     * @param id id of user
     * @param prefix the current prefix of user
     */
    user_sockets.send_table_data_real_time = function (id, prefix) {
        return __awaiter(this, void 0, void 0, function () {
            var _pre, regex, _Length_of_slash, _Final_prefix, _Array_foldes;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _pre = "";
                        if (prefix[prefix.length - 1] != '/') { // handle  the prefix of  the file
                            prefix = prefix + "/";
                        }
                        if (prefix.indexOf('/', 0) + 1 == prefix.length) { // handle  the prefix of  the folder
                            _pre = "";
                        }
                        else if (prefix.match('/').length >= 1) { // handle a nested prefix
                            _pre = "";
                            regex = /\//g;
                            _Length_of_slash = prefix.match(regex).length;
                            _Final_prefix = this.ocurance(prefix)[(_Length_of_slash - 2)];
                            _pre = prefix.slice(0, _Final_prefix + 1);
                        }
                        _Array_foldes = new Array();
                        return [4 /*yield*/, this.data_aws.get_bucket_list(id, _pre, "/").then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b, el, folder, e_1_1;
                                var _this = this;
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
                                            folder = new foldermodel_1.Foldermodel(el.Prefix, null, "folder");
                                            return [4 /*yield*/, Mongo_shared_functions_1.get_user_folder(el.Prefix, id).then(function (data) {
                                                    folder.id = data.id;
                                                    folder.date = data.date;
                                                })];
                                        case 3:
                                            _d.sent();
                                            folder.checked = false;
                                            _Array_foldes.push(folder);
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
                                                var type = _this.filter_file_type(ele.Key);
                                                _Array_foldes.push(new filemodel_1.Filemodel(ele.Key, ele.LastModified.toDateString(), (ele.Size / 1000), type));
                                            });
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).then(function () { _this.Socket.to(id).emit('get_bucket_list', { general_path: _pre, data: _Array_foldes }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method ensures the broadcasting Chart data
     *
     *
     * @param id id of user
     */
    user_sockets.Charts_real_time = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var Data_char;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Data_char = { chart_write: new Array(), chart_read: new Array() };
                        return [4 /*yield*/, user_1.User.findById(id).exec().then(function (data) {
                                Data_char.chart_write = data.get('Write').filter(function (val) {
                                    if (val.Date >= _this.get_current_week_data().firstdate
                                        && val.Date <= _this.get_current_week_data().lastday) {
                                        return val;
                                    }
                                }).sort(function (vl) { return vl.Date.getDate() - vl.Date.getDate(); });
                                return Data_char;
                            }).then(function (data_chart) {
                                _this;
                                _this.Socket.to(id).emit('get_chart_data', data_chart);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    user_sockets.get_current_week_data = function () {
        var curr = new Date;
        var first = curr.getDate() - curr.getDay();
        var last = first + 6;
        var firstday = new Date(curr.setDate(first));
        var lastday = new Date(curr.setDate(last));
        return { firstdate: firstday, lastday: lastday };
    };
    user_sockets.filter_file_type = function (Filet_name) {
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
    };
    return user_sockets;
}());
exports.user_sockets = user_sockets;
