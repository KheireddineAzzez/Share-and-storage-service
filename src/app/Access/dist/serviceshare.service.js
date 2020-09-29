"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServiceshareService = void 0;
var core_1 = require("@angular/core");
var ServiceshareService = /** @class */ (function () {
    function ServiceshareService(http) {
        this.http = http;
        this.$path = "http://localhost:3000/shared/";
    }
    ServiceshareService.prototype.get_access_folder = function (token) {
        return this.http.post("http://localhost:3000/image/Acessfolder", { token: token }).toPromise();
    };
    ServiceshareService.prototype.upload_shared_files = function (data, folder_token, path) {
        var files = new Array();
        data.forEach(function (elem) {
            files.push({ aws_data: { data: elem.path, name: path + elem.file_name, type: elem.type, buket_name: "" } });
        });
        return this.http.post(this.$path + "uploadsharedfile", { Files: files, token: folder_token });
    };
    ServiceshareService.prototype.Verifier_object_exist = function (prefix, token) {
        if (prefix === void 0) { prefix = ""; }
        return this.http.post("http://localhost:3000/user/verifyfolder", { foldername: prefix + "/", sharedtoken: token }).toPromise();
    };
    ServiceshareService.prototype.create_shared_folder = function (prefix, token) {
        return this.http.post("http://localhost:3000/shared/createsharedfolder", { foldersharename: prefix, token: token }).toPromise();
    };
    ServiceshareService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ServiceshareService);
    return ServiceshareService;
}());
exports.ServiceshareService = ServiceshareService;
