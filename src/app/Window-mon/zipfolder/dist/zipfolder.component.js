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
exports.ZipfolderComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var ZipfolderComponent = /** @class */ (function () {
    function ZipfolderComponent(dialogRef, data, serve) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serve = serve;
        this.valid = false;
    }
    ZipfolderComponent.prototype.ngOnInit = function () {
    };
    ZipfolderComponent.prototype.click_create = function () {
        this.dialogRef.close(this.data);
    };
    ZipfolderComponent.prototype.tex_change = function () {
        var _this = this;
        this.serve.Verifier_object_exist('recent/' + this.data).then(function (data) {
            _this.valid = data['value'];
            console.log(data['value']);
        });
    };
    ZipfolderComponent = __decorate([
        core_1.Component({
            selector: 'app-zipfolder',
            templateUrl: './zipfolder.component.html',
            styleUrls: ['./zipfolder.component.css']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], ZipfolderComponent);
    return ZipfolderComponent;
}());
exports.ZipfolderComponent = ZipfolderComponent;
