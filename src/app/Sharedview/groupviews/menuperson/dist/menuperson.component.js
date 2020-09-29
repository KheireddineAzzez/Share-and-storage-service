"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MenupersonComponent = void 0;
var core_1 = require("@angular/core");
var MenupersonComponent = /** @class */ (function () {
    function MenupersonComponent() {
        this.enteredButton = false;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
    }
    MenupersonComponent.prototype.ngOnInit = function () {
    };
    MenupersonComponent.prototype.dds = function (trigger, button) {
        var _this = this;
        setTimeout(function () {
            if (_this.enteredButton && !_this.isMatMenuOpen) {
                trigger.closeMenu();
            }
            if (!_this.isMatMenuOpen) {
                trigger.closeMenu();
            }
            else {
                _this.enteredButton = false;
            }
        }, 100);
    };
    __decorate([
        core_1.Input()
    ], MenupersonComponent.prototype, "user");
    MenupersonComponent = __decorate([
        core_1.Component({
            selector: 'app-menuperson',
            templateUrl: './menuperson.component.html',
            styleUrls: ['./menuperson.component.css']
        })
    ], MenupersonComponent);
    return MenupersonComponent;
}());
exports.MenupersonComponent = MenupersonComponent;
