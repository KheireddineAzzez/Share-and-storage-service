"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavComponent = void 0;
var core_1 = require("@angular/core");
var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.drawer_opne = false;
        this.Menu_hide = false;
        this.hide_side_nav = new core_1.EventEmitter();
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.open_drawer = function () {
        this.drawer_opne = !this.drawer_opne;
        this.hide_side_nav.emit(this.drawer_opne);
    };
    __decorate([
        core_1.Input()
    ], NavComponent.prototype, "Menu_hide");
    __decorate([
        core_1.Output()
    ], NavComponent.prototype, "hide_side_nav");
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.css']
        })
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
