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
exports.LinkFileComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var expansion_1 = require("@angular/material/expansion");
var LinkFileComponent = /** @class */ (function () {
    function LinkFileComponent(dialogRef, data, http, rout, ser) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.rout = rout;
        this.ser = ser;
        this.Link = "";
        this.spinner = true;
        this.link_simple = false;
        this.Expanel = false;
        this.date = new Date();
        this.Emails = new Array();
    }
    LinkFileComponent.prototype.ngOnInit = function () {
        this.get_link();
    };
    LinkFileComponent.prototype.generate_expirelink = function () {
        var _this = this;
        var dat = this.Expire_date.getTime() - (new Date()).getTime();
        var diff = Math.abs(this.Expire_date.getTime() - (new Date()).getTime());
        var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
        console.log();
        var seconde_dif = diffDays * 86400;
        this.Expanel = false;
        console.log("panel closed");
        this.ser.get_expire_link(this.data, seconde_dif).then(function (data) {
            console.log(data);
            _this.Link = data.file_link;
        });
    };
    LinkFileComponent.prototype.get_link = function () {
        var _this = this;
        this.ser.get_link(this.data).then(function (data) {
            console.log(data);
            setTimeout(function () {
                _this.Link = data.file_link;
                _this.spinner = false;
                _this.link_simple = true;
            }, 1000);
        });
    };
    LinkFileComponent.prototype.open_link_timer = function () {
        this.link_simple = false;
    };
    LinkFileComponent.prototype.close_link_timer = function () {
        this.link_simple = true;
    };
    __decorate([
        core_1.ViewChild(expansion_1.MatAccordion)
    ], LinkFileComponent.prototype, "accordion");
    LinkFileComponent = __decorate([
        core_1.Component({
            selector: 'app-link-file',
            templateUrl: './link-file.component.html',
            styleUrls: ['./link-file.component.css']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], LinkFileComponent);
    return LinkFileComponent;
}());
exports.LinkFileComponent = LinkFileComponent;
