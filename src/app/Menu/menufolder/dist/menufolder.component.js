"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MenufolderComponent = void 0;
var core_1 = require("@angular/core");
var folderlinkgen_component_1 = require("src/app/window-mon/folderlinkgen/folderlinkgen.component");
var MenufolderComponent = /** @class */ (function () {
    function MenufolderComponent(winser, service_client) {
        this.winser = winser;
        this.service_client = service_client;
    }
    MenufolderComponent.prototype.ngOnInit = function () {
    };
    MenufolderComponent.prototype.Folder_access = function () {
        console.log(this.Folder);
        this.winser.open_access_Foldet(folderlinkgen_component_1.FolderlinkgenComponent, this.Folder);
    };
    ;
    __decorate([
        core_1.Input()
    ], MenufolderComponent.prototype, "Folder");
    MenufolderComponent = __decorate([
        core_1.Component({
            selector: 'app-menufolder',
            templateUrl: './menufolder.component.html',
            styleUrls: ['./menufolder.component.css']
        })
    ], MenufolderComponent);
    return MenufolderComponent;
}());
exports.MenufolderComponent = MenufolderComponent;
