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
exports.__esModule = true;
exports.ShareFileComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var ShareFileComponent = /** @class */ (function () {
    function ShareFileComponent(dialogRef, data, http, rout, ser, auth) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.rout = rout;
        this.ser = ser;
        this.auth = auth;
        this.Emails = new Array();
    }
    ShareFileComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    ShareFileComponent.prototype.envoyer = function () {
        var _this = this;
        var emails_send = new Object();
        var user_infol = this.auth.get_user_info();
        this.ser.get_link(this.data).then(function (url_file) {
            emails_send.emails = _this.Emails;
            emails_send.url = url_file.file_link + "";
            emails_send.owner = 'khayry';
            emails_send.addition_info = "dsd";
            emails_send.owner = user_infol.email;
            _this.ser.send_email(emails_send);
        });
    };
    ShareFileComponent = __decorate([
        core_1.Component({
            selector: 'app-share-file',
            templateUrl: './share-file.component.html',
            styleUrls: ['./share-file.component.css']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], ShareFileComponent);
    return ShareFileComponent;
}());
exports.ShareFileComponent = ShareFileComponent;
