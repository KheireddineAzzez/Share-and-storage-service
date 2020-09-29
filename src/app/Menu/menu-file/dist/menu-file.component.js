"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MenuFileComponent = void 0;
/**
 * @description this class the method that generated for the file
 */
var core_1 = require("@angular/core");
var link_file_component_1 = require("src/app/Window-mon/link-file/link-file.component");
var share_file_component_1 = require("src/app/Window-mon/share-file/share-file.component");
var rename_file_component_1 = require("src/app/Window-mon/rename-file/rename-file.component");
var MenuFileComponent = /** @class */ (function () {
    function MenuFileComponent(win, http, serv_client) {
        this.win = win;
        this.http = http;
        this.serv_client = serv_client;
        this.buket_name = "";
        this.prefix_name = "";
        this.rename_event = new core_1.EventEmitter();
    }
    MenuFileComponent.prototype.ngOnInit = function () {
        console.log(this.prefix_name);
    };
    MenuFileComponent.prototype.open_link_file = function () {
        this.win.open_link_file(link_file_component_1.LinkFileComponent, this.prefix_name);
    };
    MenuFileComponent.prototype.open_mail_sender = function () {
        this.win.open_Mailer_link(share_file_component_1.ShareFileComponent, this.prefix_name);
    };
    MenuFileComponent.prototype.open_rename = function () {
        var _this = this;
        this.win.open_rename_file(rename_file_component_1.RenameFileComponent, this.prefix_name).afterClosed().toPromise().then(function (data) {
            if (data != undefined) {
                _this.rename_event.emit({ old_name: _this.prefix_name, new_name: data, index: _this.index_number });
            }
        });
    };
    MenuFileComponent.prototype.View_file = function () {
        this.serv_client.get_link(this.prefix_name).then(function (data) {
            window.open(data['file_link']);
        });
    };
    __decorate([
        core_1.Input()
    ], MenuFileComponent.prototype, "buket_name");
    __decorate([
        core_1.Input()
    ], MenuFileComponent.prototype, "prefix_name");
    __decorate([
        core_1.Output()
    ], MenuFileComponent.prototype, "rename_event");
    __decorate([
        core_1.Input()
    ], MenuFileComponent.prototype, "index_number");
    MenuFileComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-file',
            templateUrl: './menu-file.component.html',
            styleUrls: ['./menu-file.component.css']
        })
    ], MenuFileComponent);
    return MenuFileComponent;
}());
exports.MenuFileComponent = MenuFileComponent;
