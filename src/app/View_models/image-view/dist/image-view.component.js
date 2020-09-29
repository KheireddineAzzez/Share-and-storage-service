"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ImageViewComponent = void 0;
var core_1 = require("@angular/core");
var ImageViewComponent = /** @class */ (function () {
    function ImageViewComponent() {
        this.remove = new core_1.EventEmitter();
        this.fake_path = "";
    }
    ImageViewComponent.prototype.ngOnInit = function () {
        try {
            this.fake_path = this.filter_file_type(this.file.file_name);
        }
        catch (ex) {
            console.log(ex);
        }
    };
    ImageViewComponent.prototype.Remove_image = function () {
        this.remove.emit(this.file);
    };
    ImageViewComponent.prototype.filter_file_type = function (Filet_name) {
        if (Filet_name.includes('.mp4')) {
            return "https://img.icons8.com/fluent/120/000000/video.png";
        }
        else if (Filet_name.includes('.docx')) {
            return 'https://img.icons8.com/color/120/000000/microsoft-word-2019--v2.png';
        }
        else if (Filet_name.includes('.mp3')) {
            return 'https://img.icons8.com/color/200/000000/audio-skimming.png';
        }
        else if (Filet_name.includes('.txt')) {
            return 'https://img.icons8.com/ultraviolet/120/000000/txt.png';
        }
        else if (Filet_name.includes('.png') || Filet_name.includes('.jpg') || Filet_name.includes('.PNG')) {
            return this.file.path;
        }
        else if (Filet_name.includes('.zip')) {
            return 'https://img.icons8.com/ultraviolet/120/000000/zip.png';
        }
        else if (Filet_name.includes('.rar')) {
            return 'https://img.icons8.com/ultraviolet/120/000000/rar.png';
        }
    };
    __decorate([
        core_1.Input()
    ], ImageViewComponent.prototype, "file");
    __decorate([
        core_1.Output()
    ], ImageViewComponent.prototype, "remove");
    ImageViewComponent = __decorate([
        core_1.Component({
            selector: 'app-image-view',
            templateUrl: './image-view.component.html',
            styleUrls: ['./image-view.component.css']
        })
    ], ImageViewComponent);
    return ImageViewComponent;
}());
exports.ImageViewComponent = ImageViewComponent;
