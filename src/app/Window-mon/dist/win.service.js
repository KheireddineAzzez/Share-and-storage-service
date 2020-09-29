"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WinService = void 0;
var core_1 = require("@angular/core");
var succes_snake_component_1 = require("../Snaks_bar/succes-snake/succes-snake.component");
var faild_snake_component_1 = require("../Snaks_bar/faild-snake/faild-snake.component");
var WinService = /** @class */ (function () {
    function WinService(route, dialog, snake) {
        this.route = route;
        this.dialog = dialog;
        this.snake = snake;
    }
    WinService.prototype.create_account = function () {
        this.route.navigate(['/', 'createaccount']).then(function (ff) { console.log(ff); })["catch"](function (err) { console.log(err); });
    };
    WinService.prototype.open_folder_creation = function (component, data) {
        return this.dialog.open(component, {
            width: '25%',
            height: '45%',
            data: data
        });
    };
    WinService.prototype.open_upload_files = function (component, data) {
        return this.dialog.open(component, {
            panelClass: ['no-padding', 'no-scrolls'],
            width: '50%',
            height: '70%',
            data: data
        });
    };
    WinService.prototype.open_link_file = function (component, data) {
        return this.dialog.open(component, {
            width: '40%',
            height: '40%',
            data: data,
            backdropClass: ['File_link']
        });
    };
    WinService.prototype.open_Mailer_link = function (component, data) {
        return this.dialog.open(component, {
            width: '40%',
            height: '40%',
            data: data,
            backdropClass: ['border_rad'],
            panelClass: ['no-padding', 'no-scrolls']
        });
    };
    WinService.prototype.open_success_snake = function (data) {
        this.snake.openFromComponent(succes_snake_component_1.SuccesSnakeComponent, {
            duration: 5000,
            data: data,
            panelClass: ['border_rad', "snak"]
        });
    };
    WinService.prototype.open_rename_file = function (component, data) {
        return this.dialog.open(component, {
            width: '25%',
            height: '30%',
            data: data,
            backdropClass: ['border_rad'],
            panelClass: ['no-padding', 'no-scrolls']
        });
    };
    WinService.prototype.open_ziper_files = function (component, data) {
        return this.dialog.open(component, {
            width: '30%',
            height: '35%',
            data: data,
            panelClass: ['no-padding', 'no-scrolls']
        });
    };
    WinService.prototype.open_snak_error = function (data) {
        return this.snake.openFromComponent(faild_snake_component_1.FaildSnakeComponent, {
            duration: 5000,
            data: data,
            panelClass: ['border_rad', "snak_error"]
        });
    };
    WinService.prototype.open_access_Foldet = function (component, data) {
        return this.dialog.open(component, {
            width: '50%',
            height: '60%',
            panelClass: ['no-padding', 'no-scrolls'],
            data: data
        });
    };
    WinService.prototype.open_share_folder_creation = function (component, data) {
        return this.dialog.open(component, {
            width: '25%',
            height: '45%',
            data: data
        });
    };
    WinService = __decorate([
        core_1.Injectable({
            providedIn: 'root', useValue: {}
        })
    ], WinService);
    return WinService;
}());
exports.WinService = WinService;
