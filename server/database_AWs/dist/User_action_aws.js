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
exports.upload_to_aws = void 0;
var user_1 = require("../models/user");
var base64_arraybuffer_1 = require("base64-arraybuffer");
var aws_sdk_1 = require("aws-sdk");
var buffer_1 = require("buffer");
var User_socket_1 = require("../sockets/User_socket");
var adm_zip_1 = require("adm-zip");
var write_1 = require("../models/write");
var User_contract = new aws_sdk_1["default"].S3({
    endpoint: 'http://localhost:9000',
    secretAccessKey: 'kheireddineazzez',
    accessKeyId: 'kheireddineazzez',
    s3BucketEndpoint: true,
    s3ForcePathStyle: true,
    signatureVersion: "v4"
});
var upload_to_aws = /** @class */ (function () {
    function upload_to_aws(bucket_name, key, source) {
        if (bucket_name === void 0) { bucket_name = ""; }
        if (key === void 0) { key = ""; }
        this.data = source;
        this.bucket_name = bucket_name;
        this.key = key;
    }
    upload_to_aws.prototype.upload_image = function (bucket_name, source) {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var contentType, _b, _c, elem, e_1_1, error_1;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.data == null) {
                            this.data = source;
                        }
                        contentType = 'image/png';
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 14, , 15]);
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 13]);
                        _b = __asyncValues(this.data);
                        _d.label = 3;
                    case 3: return [4 /*yield*/, _b.next()];
                    case 4:
                        if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 6];
                        elem = _c.value;
                        this.data.forEach(function (elem) { return __awaiter(_this, void 0, void 0, function () {
                            var pur_image_file, bin, buf;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        pur_image_file = elem.aws_data.data;
                                        bin = base64_arraybuffer_1.decode(pur_image_file);
                                        buf = buffer_1.Buffer.from(pur_image_file.replace("data:video/mp4;base64,", "").replace(/^data:audio\/\w+;base64/, "").replace(/^data:image\/\w+;base64,/, "").replace("data:text/plain;base64,", "").replace("data:application/octet-stream;base64,", ""), 'base64');
                                        console.log(pur_image_file.slice(0, 30));
                                        return [4 /*yield*/, User_contract.upload({
                                                Bucket: bucket_name,
                                                ContentEncoding: 'base64',
                                                Key: elem.aws_data.name,
                                                Body: buf
                                            }).promise().then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                                var _this = this;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, User_socket_1.user_sockets.send_table_data_real_time(bucket_name, elem.aws_data.name).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                                                var wr;
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0:
                                                                            wr = new write_1.write("write", new Date(), buffer_1.Buffer.byteLength(buf) / 1e+6, "upload");
                                                                            return [4 /*yield*/, this.write_action(bucket_name, wr)];
                                                                        case 1:
                                                                            _a.sent();
                                                                            User_socket_1.user_sockets.Charts_real_time(bucket_name);
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); })];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })["catch"](function (err) { console.log(err); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); });
                        _d.label = 5;
                    case 5: return [3 /*break*/, 3];
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
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        error_1 = _d.sent();
                        return [3 /*break*/, 15];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    upload_to_aws.prototype.create_bucket = function (bucket_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_contract.createBucket({
                            Bucket: bucket_name
                        }).promise()["catch"](function (err) { console.log(err.message); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    upload_to_aws.prototype.get_bucket_list = function (BUCKE_name, prefix, del) {
        return User_contract.listObjectsV2({
            Bucket: BUCKE_name,
            Prefix: prefix,
            Delimiter: del
        }).promise();
    };
    upload_to_aws.prototype.create_folder = function (bucket_name, prefix) {
        return User_contract.upload({
            Bucket: bucket_name,
            Key: prefix,
            Body: "",
            ContentType: ''
        }).promise().then(function (data) { return data; });
    };
    upload_to_aws.prototype.verfier_existance_file = function (bucket_name, prefix) {
        return User_contract.getObject({
            Bucket: bucket_name,
            Key: prefix
        }).promise();
    };
    upload_to_aws.prototype.get_object_link = function (bucket_name, key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_contract.getSignedUrlPromise("getObject", {
                            Bucket: bucket_name,
                            Key: key
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    upload_to_aws.prototype.get_expire_link = function (bucket_name, key, expire_time) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_contract.getSignedUrlPromise("getObject", {
                            Bucket: bucket_name,
                            Key: key,
                            Expires: expire_time
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    upload_to_aws.prototype.delete_files = function (Files, bucket_name) {
        var Files_1, Files_1_1;
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function () {
            var arr, arr_folder, some, file, e_2_1, wri;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        arr = new Array();
                        arr_folder = new Array();
                        some = 0;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 9, 10, 15]);
                        Files_1 = __asyncValues(Files);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, Files_1.next()];
                    case 3:
                        if (!(Files_1_1 = _b.sent(), !Files_1_1.done)) return [3 /*break*/, 8];
                        file = Files_1_1.value;
                        if (!(file.nom.indexOf("/") + 1 == file.nom.length || file.nom.lastIndexOf('/') + 1 == file.nom.length)) return [3 /*break*/, 5];
                        console.log(file.nom);
                        return [4 /*yield*/, this.delete_folder(file.nom, bucket_name)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        console.log(file.nom);
                        some = some + file.size;
                        return [4 /*yield*/, this.delete_object(file.nom, bucket_name)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [3 /*break*/, 2];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 15];
                    case 10:
                        _b.trys.push([10, , 13, 14]);
                        if (!(Files_1_1 && !Files_1_1.done && (_a = Files_1["return"]))) return [3 /*break*/, 12];
                        return [4 /*yield*/, _a.call(Files_1)];
                    case 11:
                        _b.sent();
                        _b.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 14: return [7 /*endfinally*/];
                    case 15:
                        wri = new write_1.write("write", (new Date()), some / 1000, "Delete");
                        console.log(some);
                        return [4 /*yield*/, this.write_action(bucket_name, wri).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, User_socket_1.user_sockets.Charts_real_time(bucket_name)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 16:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    upload_to_aws.prototype.delete_object = function (key, bucket_name) {
        return User_contract.deleteObject({
            Bucket: bucket_name,
            Key: key
        }).promise();
    };
    upload_to_aws.prototype.delete_folder = function (key, bucket_name) {
        return __awaiter(this, void 0, void 0, function () {
            var somme;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        somme = 0;
                        return [4 /*yield*/, this.get_bucket_list(bucket_name, key, "").then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var _a, _b, elem, e_3_1;
                                var _this = this;
                                var e_3, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            _d.trys.push([0, 6, 7, 12]);
                                            _a = __asyncValues(data.Contents);
                                            _d.label = 1;
                                        case 1: return [4 /*yield*/, _a.next()];
                                        case 2:
                                            if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                                            elem = _b.value;
                                            if (elem != null) {
                                                somme = elem.Size + somme;
                                            }
                                            return [4 /*yield*/, User_contract.deleteObject({
                                                    Bucket: bucket_name,
                                                    Key: elem.Key
                                                }).promise().then(function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var wri;
                                                    var _this = this;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                wri = new write_1.write("write", (new Date()), somme / 1000, "Delete");
                                                                return [4 /*yield*/, this.write_action(bucket_name, wri).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                                                        return __generator(this, function (_a) {
                                                                            switch (_a.label) {
                                                                                case 0: return [4 /*yield*/, User_socket_1.user_sockets.Charts_real_time(bucket_name)];
                                                                                case 1:
                                                                                    _a.sent();
                                                                                    return [2 /*return*/];
                                                                            }
                                                                        });
                                                                    }); })];
                                                            case 1:
                                                                _a.sent();
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 3:
                                            _d.sent();
                                            somme = 0;
                                            _d.label = 4;
                                        case 4: return [3 /*break*/, 1];
                                        case 5: return [3 /*break*/, 12];
                                        case 6:
                                            e_3_1 = _d.sent();
                                            e_3 = { error: e_3_1 };
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
                                            if (e_3) throw e_3.error;
                                            return [7 /*endfinally*/];
                                        case 11: return [7 /*endfinally*/];
                                        case 12: return [4 /*yield*/, User_contract.deleteObject({
                                                Bucket: bucket_name,
                                                Key: data.Prefix
                                            }).promise()];
                                        case 13:
                                            _d.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }).then(function () { return 0; })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    upload_to_aws.prototype.copy_folder = function (BUCKET_NAME, OLD_KEY, NEW_KEY) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, User_contract.copyObject({
                            Bucket: BUCKET_NAME,
                            CopySource: BUCKET_NAME + "/" + OLD_KEY,
                            Key: NEW_KEY
                        })
                            .promise()
                            .then(function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: 
                                    // Delete the old object
                                    return [4 /*yield*/, User_contract.deleteObject({
                                            Bucket: BUCKET_NAME,
                                            Key: OLD_KEY
                                        }).promise()];
                                    case 1: 
                                    // Delete the old object
                                    return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })["catch"](function (e) { return console.error(e); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    upload_to_aws.prototype.get_file_data = function (bucket_name, prefix) {
        User_contract.getObject({
            Bucket: bucket_name,
            Key: prefix
        }).promise().then(function (data) {
        });
    };
    upload_to_aws.prototype.Ziped_files = function (bucket_name, Files, zip_name) {
        var Files_2, Files_2_1;
        var e_4, _a;
        return __awaiter(this, void 0, void 0, function () {
            var ziper, el, e_4_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        ziper = new adm_zip_1["default"]();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 12]);
                        Files_2 = __asyncValues(Files);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, Files_2.next()];
                    case 3:
                        if (!(Files_2_1 = _b.sent(), !Files_2_1.done)) return [3 /*break*/, 5];
                        el = Files_2_1.value;
                        if (el.type.includes("folder")) {
                            try {
                                console.log(el.nom.slice(0, el.nom.length - 1));
                                ziper.addLocalFolder("C:\\miniosdk\\data\\" + bucket_name + "\\" + el.nom.replace('/', ''));
                            }
                            catch (err) {
                                console.log(err);
                            }
                        }
                        else {
                            ziper.addLocalFile("C:\\miniosdk\\data\\" + bucket_name + "\\" + (el.nom.replace('/', '\\')));
                        }
                        _b.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_4_1 = _b.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _b.trys.push([7, , 10, 11]);
                        if (!(Files_2_1 && !Files_2_1.done && (_a = Files_2["return"]))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _a.call(Files_2)];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_4) throw e_4.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12:
                        console.log(ziper.getEntries);
                        return [4 /*yield*/, User_contract.putObject({
                                Bucket: bucket_name,
                                Body: ziper.toBuffer(),
                                Key: 'package/' + zip_name + ".zip"
                            }).promise()];
                    case 13: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    upload_to_aws.prototype.write_action = function (id, wr) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, user_1.User.update({ _id: id }, { $push: { Write: wr } }).exec().then((function () {
                            return { message: "correct", value: true };
                        }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return upload_to_aws;
}());
exports.upload_to_aws = upload_to_aws;
