"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.FolderlinkgenComponent = void 0;
var keycodes_1 = require("@angular/cdk/keycodes");
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var foldershare_1 = require("src/app/models/foldershare");
var FolderlinkgenComponent = /** @class */ (function () {
    function FolderlinkgenComponent(matdialog, data, service, auth) {
        this.matdialog = matdialog;
        this.data = data;
        this.service = service;
        this.auth = auth;
        this.separatorKeysCodes = [keycodes_1.ENTER, keycodes_1.COMMA, keycodes_1.SPACE];
        this.Open_choose_date = false;
        this.date = new Date(new Date().getTime() + (1000 * 60 * 60 * 24));
        this.link_simple = true;
        this.Expanel = false;
        this.group_name = "";
        this.Expire_date = new Date();
        this.Emails = new Array();
        this.Link = '';
        this.erro_message = "";
        this.spinner_email_valid = false;
        this.folder_share = new foldershare_1.Foldershare(data.nom, data.date, data.type, "", []);
    }
    FolderlinkgenComponent.prototype.ngOnInit = function () {
        this.get_folder_link();
    };
    FolderlinkgenComponent.prototype.get_folder_link = function () {
        var _this = this;
        try {
            this.folder_share._owner = this.auth.get_user_info().user_id;
            this.folder_share._classification = 'public';
            this.folder_share.group_name = this.group_name;
            this.folder_share.id = this.data.id;
            this.service.Generate_access_folder_link(this.folder_share).then(function (data) {
                _this.folder_share._owner = _this.auth.get_user_info().user_id;
                _this.Link = "http://localhost:4200/sharepoint/" + data._token;
                console.log(data);
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    FolderlinkgenComponent.prototype.generate_expire_link = function () {
        var _this = this;
        try {
            this.folder_share._classification = 'private';
            this.folder_share.group_name = this.group_name;
            this.folder_share._authorization_emails = this.Emails;
            this.folder_share._owner = this.auth.get_user_info().user_id;
            this.folder_share.date = this.Expire_date;
            this.service.Generate_access_folder_link(this.folder_share).then(function (data) {
                _this.Link = "http://localhost:4200/sharepoint/" + data._token;
                console.log(data);
            });
        }
        catch (err) { }
    };
    FolderlinkgenComponent.prototype.open_link_timer = function () {
        this.link_simple = false;
    };
    FolderlinkgenComponent.prototype.close_link_timer = function () {
        this.link_simple = true;
    };
    FolderlinkgenComponent.prototype.remove = function (el) {
        var index = this.Emails.indexOf(el);
        if (index >= 0) {
            this.Emails.splice(index, 1);
        }
    };
    FolderlinkgenComponent.prototype.add = function (event) {
        return __awaiter(this, void 0, Promise, function () {
            var input, value;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = event.input;
                        value = event.value;
                        if (!(value || '').trim()) return [3 /*break*/, 2];
                        this.spinner_email_valid = true;
                        return [4 /*yield*/, this.service.user_exist(value).toPromise().then(function (data) {
                                if (value == _this.auth.get_user_info().email) {
                                    _this.erro_message = "Your are the admin of this group";
                                    _this.spinner_email_valid = false;
                                }
                                else if (_this.Emails.includes(value)) {
                                    _this.erro_message = 'Email doublication';
                                    _this.spinner_email_valid = false;
                                }
                                else if (data.data) {
                                    _this.Emails.push(value);
                                    _this.spinner_email_valid = false;
                                    _this.erro_message = "";
                                }
                                else {
                                    _this.erro_message = "Email dosen't exist";
                                    _this.spinner_email_valid = false;
                                }
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        // Reset the input value
                        if (input) {
                            input.value = '';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FolderlinkgenComponent = __decorate([
        core_2.Component({
            selector: 'app-folderlinkgen',
            templateUrl: './folderlinkgen.component.html',
            styleUrls: ['./folderlinkgen.component.css']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], FolderlinkgenComponent);
    return FolderlinkgenComponent;
}());
exports.FolderlinkgenComponent = FolderlinkgenComponent;
