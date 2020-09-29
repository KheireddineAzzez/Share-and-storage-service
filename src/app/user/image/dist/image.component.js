"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ImageComponent = void 0;
var core_1 = require("@angular/core");
var ImageComponent = /** @class */ (function () {
    function ImageComponent(http) {
        this.http = http;
        this.files = new Array();
        this.drawer_open = false;
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    ImageComponent.prototype.add_image = function ($event) {
        var _this = this;
        var _loop_1 = function (index) {
            var element = $event.target.files[index];
            reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = function (event) {
                _this.files.push({ path: event.target.result.toString(), file_name: $event.target.files[index].name });
            };
        };
        var reader;
        for (var index = 0; index < $event.target.files.length; index++) {
            _loop_1(index);
        }
    };
    ImageComponent.prototype.openside = function ($event) {
        this.drawer_open = $event;
    };
    ImageComponent.prototype.upload_images = function () {
        var data = new Array();
        this.files.forEach(function (elem) {
        });
        this.http.post('http://localhost:3000/image/upload', data).toPromise()["catch"](function (err) { console.log; });
        console.log(data);
    };
    ImageComponent = __decorate([
        core_1.Component({
            selector: 'app-image',
            templateUrl: './image.component.html',
            styleUrls: ['./image.component.css']
        })
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;
