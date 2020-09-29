"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PublicviewComponent = void 0;
var core_1 = require("@angular/core");
var PublicviewComponent = /** @class */ (function () {
    function PublicviewComponent() {
        this.event = new core_1.EventEmitter();
        this.grou_public = new Array();
    }
    PublicviewComponent.prototype.ngOnInit = function () {
        this.event.subscribe(function (data) {
            console.log(data);
        });
    };
    __decorate([
        core_1.Input()
    ], PublicviewComponent.prototype, "event");
    __decorate([
        core_1.Input()
    ], PublicviewComponent.prototype, "group");
    PublicviewComponent = __decorate([
        core_1.Component({
            selector: 'app-publicview',
            templateUrl: './publicview.component.html',
            styleUrls: ['./publicview.component.css']
        })
    ], PublicviewComponent);
    return PublicviewComponent;
}());
exports.PublicviewComponent = PublicviewComponent;
