"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavShareComponent = void 0;
var core_1 = require("@angular/core");
var create_shared_folder_component_1 = require("src/app/Window-mon/shared/create-shared-folder/create-shared-folder.component");
var files_upload_component_1 = require("src/app/Window-mon/files-upload/files-upload.component");
var NavShareComponent = /** @class */ (function () {
    function NavShareComponent(service_win, share_serv, route) {
        this.service_win = service_win;
        this.share_serv = share_serv;
        this.route = route;
        this.token = "";
        this.path = "";
    }
    NavShareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            _this.token = data.id;
        });
    };
    NavShareComponent.prototype.create_newfolder = function () {
    };
    NavShareComponent.prototype.upload_Files = function () {
        var _this = this;
        this.service_win.open_upload_files(files_upload_component_1.FilesUploadComponent, "").afterClosed().subscribe(function (data) {
            if (data != undefined) {
                _this.share_serv.upload_shared_files(data, _this.token, _this.path).toPromise().then(function (data) {
                    console.log(data);
                });
            }
        });
    };
    NavShareComponent.prototype.create_folder = function () {
        var _this = this;
        var folder_creation = new Object();
        folder_creation.folder_name = "";
        folder_creation.path = this.path;
        folder_creation.accepted = false;
        this.service_win.open_share_folder_creation(create_shared_folder_component_1.CreateSharedFolderComponent, { folderc: folder_creation, token: this.token }).afterClosed().subscribe(function (data) {
            _this.share_serv.create_shared_folder(_this.path + data.folderc.folder_name, data.token);
        });
    };
    __decorate([
        core_1.Input()
    ], NavShareComponent.prototype, "Folder");
    __decorate([
        core_1.Input()
    ], NavShareComponent.prototype, "path");
    NavShareComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-share',
            templateUrl: './nav-share.component.html',
            styleUrls: ['./nav-share.component.css']
        })
    ], NavShareComponent);
    return NavShareComponent;
}());
exports.NavShareComponent = NavShareComponent;
