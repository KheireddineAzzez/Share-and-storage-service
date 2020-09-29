"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IterfaceViewComponent = void 0;
var core_1 = require("@angular/core");
var user_model_1 = require("src/app/models/user_model");
var IterfaceViewComponent = /** @class */ (function () {
    function IterfaceViewComponent(serv) {
        this.serv = serv;
        this.rr = "";
        this.Menu_nav_hide = false;
        this.user = new user_model_1.user_class();
        this.drawer_open = false;
    }
    ;
    IterfaceViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.get_user_data().then(function (data) {
            _this.user = data;
        });
    };
    IterfaceViewComponent.prototype.openside = function ($event) {
        this.drawer_open = $event;
    };
    IterfaceViewComponent.prototype.hide_nave_bar = function () {
        this.drawer_open = false;
        this.Menu_nav_hide = true;
    };
    IterfaceViewComponent = __decorate([
        core_1.Component({
            selector: 'app-iterface-view',
            templateUrl: './iterface-view.component.html',
            styleUrls: ['./iterface-view.component.css']
        })
    ], IterfaceViewComponent);
    return IterfaceViewComponent;
}());
exports.IterfaceViewComponent = IterfaceViewComponent;
