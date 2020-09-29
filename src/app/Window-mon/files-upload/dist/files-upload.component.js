"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.FilesUploadComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var FilesUploadComponent = /** @class */ (function () {
    function FilesUploadComponent(dialogRef, data, http, rout, ser) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.rout = rout;
        this.ser = ser;
        this.filess = new Array();
        this.files = [];
        this.even_files_uploaded = new core_1.EventEmitter();
        this.path = "";
    }
    FilesUploadComponent.prototype.ngOnInit = function () {
    };
    FilesUploadComponent.prototype.dropped = function (files) {
        var _this = this;
        this.files = files;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var droppedFile = files_1[_i];
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    _this.add_image(file);
                });
            }
            else {
                // = a directory
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        }
    };
    FilesUploadComponent.prototype.add_image = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            console.log(event.target.result.toString());
            _this.filess.push({ path: event.target.result.toString(), file_name: file.name, type: file.type, size: file.size, last_modified: new Date(file.lastModified).toDateString() });
        };
    };
    FilesUploadComponent.prototype.upload_images = function () {
        this.dialogRef.close(this.filess);
    };
    FilesUploadComponent.prototype.remove_image_from_files = function (image_item) {
        var index_item = this.filess.indexOf(image_item);
        this.filess.splice(index_item, 1);
    };
    __decorate([
        core_1.Output()
    ], FilesUploadComponent.prototype, "even_files_uploaded");
    FilesUploadComponent = __decorate([
        core_1.Component({
            selector: 'app-files-upload',
            templateUrl: './files-upload.component.html',
            styleUrls: ['./files-upload.component.css']
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], FilesUploadComponent);
    return FilesUploadComponent;
}());
exports.FilesUploadComponent = FilesUploadComponent;
