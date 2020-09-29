"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MenugroupComponent = void 0;
var core_1 = require("@angular/core");
var groupname_component_1 = require("src/app/Window-mon/group/groupname/groupname.component");
var MenugroupComponent = /** @class */ (function () {
    function MenugroupComponent(service, win) {
        this.service = service;
        this.win = win;
        this.event_delete = new core_1.EventEmitter();
    }
    MenugroupComponent.prototype.ngOnInit = function () {
    };
    MenugroupComponent.prototype.removegroup = function () {
        console.log(this.group.group_id + "dddddddd");
        this.service.delete_group(this.group.group_id);
        this.event_delete.emit(this.group);
    };
    MenugroupComponent.prototype.rename_group = function () {
        var _this = this;
        this.win.open_ziper_files(groupname_component_1.GroupnameComponent, { group: this.group }).afterClosed().subscribe(function (data) {
            if (data) {
                _this.win.open_success_snake({ message: ' Successfly name update', image: '/assets/images/imagegroup.png' });
            }
        });
    };
    __decorate([
        core_1.Input()
    ], MenugroupComponent.prototype, "group");
    __decorate([
        core_1.Output()
    ], MenugroupComponent.prototype, "event_delete");
    MenugroupComponent = __decorate([
        core_1.Component({
            selector: 'app-menugroup',
            templateUrl: './menugroup.component.html',
            styleUrls: ['./menugroup.component.css']
        })
    ], MenugroupComponent);
    return MenugroupComponent;
}());
exports.MenugroupComponent = MenugroupComponent;
