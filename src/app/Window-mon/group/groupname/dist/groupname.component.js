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
exports.GroupnameComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var GroupnameComponent = /** @class */ (function () {
    function GroupnameComponent(dialogRef, data, service) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.Group_name_change = "";
        this.grou_name_verification = true;
        this.name_already_exist = false;
    }
    GroupnameComponent.prototype.ngOnInit = function () {
    };
    GroupnameComponent.prototype.nex_group_name_change = function () {
        var _this = this;
        this.grou_name_verification = false;
        console.log(this.data.group.group_id);
        this.service.check_group_exist(this.Group_name_change).then(function (data) {
            _this.grou_name_verification = true;
            _this.name_already_exist = data.data;
            console.log(data);
        });
    };
    GroupnameComponent.prototype.close_pop = function () {
        var _this = this;
        this.service.rename_group(this.Group_name_change, this.data.group.group_id).then(function (data) {
            _this.data.group.goroup_name = _this.Group_name_change;
            _this.dialogRef.close(true);
        });
    };
    GroupnameComponent = __decorate([
        core_1.Component({
            selector: 'app-groupname',
            templateUrl: './groupname.component.html',
            styleUrls: ['./groupname.component.css']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], GroupnameComponent);
    return GroupnameComponent;
}());
exports.GroupnameComponent = GroupnameComponent;
