"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PrivateviewComponent = void 0;
var core_1 = require("@angular/core");
var PrivateviewComponent = /** @class */ (function () {
    function PrivateviewComponent() {
    }
    PrivateviewComponent.prototype.ngOnInit = function () {
        console.log(this.group.reverse());
    };
    PrivateviewComponent.prototype.remover_group = function (_group) {
        var group_id = _group.group_id;
        var index = this.group.indexOf(_group);
        this.group.splice(index, 1);
    };
    PrivateviewComponent.prototype.rename_group = function (_group) {
        var group_id = _group.group_id;
        var index = this.group.indexOf(_group);
    };
    __decorate([
        core_1.Input()
    ], PrivateviewComponent.prototype, "group");
    PrivateviewComponent = __decorate([
        core_1.Component({
            selector: 'app-privateview',
            templateUrl: './privateview.component.html',
            styleUrls: ['./privateview.component.css']
        })
    ], PrivateviewComponent);
    return PrivateviewComponent;
}());
exports.PrivateviewComponent = PrivateviewComponent;
