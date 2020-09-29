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
exports.RenameFileComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var RenameFileComponent = /** @class */ (function () {
    function RenameFileComponent(dialogRef, data, serve) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serve = serve;
        this.Change_name = "";
        this.valid_name = false;
        var da = this.data + "";
        this.Change_name = da.substring(da.lastIndexOf('/') + 1, da.lastIndexOf('.'));
    }
    RenameFileComponent.prototype.ngOnInit = function () {
    };
    RenameFileComponent.prototype.on_close = function () {
        this.serve.File_cpoy({ oldkey: this.data, newkey: this.Change_name + this.data.substr(this.data.indexOf('.')) });
        this.dialogRef.close(this.Change_name);
    };
    RenameFileComponent.prototype.verify_object_name = function () {
        var _this = this;
        this.serve.Verifier_object_exist(this.Change_name + this.data.substr(this.data.indexOf('.')), true).then(function (data) {
            _this.valid_name = data["value"];
        });
    };
    RenameFileComponent = __decorate([
        core_1.Component({
            selector: 'app-rename-file',
            templateUrl: './rename-file.component.html',
            styleUrls: ['./rename-file.component.css']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], RenameFileComponent);
    return RenameFileComponent;
}());
exports.RenameFileComponent = RenameFileComponent;
