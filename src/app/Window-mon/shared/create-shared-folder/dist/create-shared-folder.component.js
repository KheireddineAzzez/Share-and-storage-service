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
exports.CreateSharedFolderComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var CreateSharedFolderComponent = /** @class */ (function () {
    function CreateSharedFolderComponent(dialogRef, data, ser) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ser = ser;
        this.folder_name = "";
        this.error_message = "";
        this.error_ = true;
    }
    CreateSharedFolderComponent.prototype.ngOnInit = function () {
        console.log();
    };
    CreateSharedFolderComponent.prototype.close_ = function () {
        this.data.folderc.folder_name = this.folder_name;
        this.dialogRef.close(this.data);
    };
    CreateSharedFolderComponent.prototype.cancel_ = function () {
        this.data.folderc.accepted = false;
        this.dialogRef.close(this.data);
    };
    CreateSharedFolderComponent.prototype.change_text_verification = function () {
        var _this = this;
        console.log("done");
        if (this.folder_name.length >= 4) {
            console.log(this.data.folderc.path + "ddddddd" + this.folder_name);
            this.ser.Verifier_object_exist((this.data.folderc.path + this.folder_name), this.data.token).then(function (data) {
                console.log(data['value']);
                _this.data.folderc.accepted = data["value"];
                _this.error_ = data["value"];
            });
        }
    };
    CreateSharedFolderComponent = __decorate([
        core_1.Component({
            selector: 'app-create-shared-folder',
            templateUrl: './create-shared-folder.component.html',
            styleUrls: ['./create-shared-folder.component.css']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], CreateSharedFolderComponent);
    return CreateSharedFolderComponent;
}());
exports.CreateSharedFolderComponent = CreateSharedFolderComponent;
