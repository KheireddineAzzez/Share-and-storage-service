"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ControllerComponent = void 0;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var ControllerComponent = /** @class */ (function () {
    function ControllerComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    ControllerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (data) {
            var _id = data.id;
            _this.service.get_access_folder(_id).then(function (data) {
                _this.datasource = new table_1.MatTableDataSource(data.data);
                var st = /\//g;
                _this.path = data.path_folder.replace(st, "➜");
                _this.realpath = data.path_folder;
                console.log(data);
            });
        });
    };
    ControllerComponent.prototype.Awsome_path_view = function (path) {
        var _this = this;
        this.route.params.subscribe(function (data_param) {
            _this.path = (data_param.id + "").replace("_", '/');
            var id = data_param.id + "";
            var final_pre = id.replace('_', '/');
            if (data_param.id != "acceuil") { //if the path is equal to acceuil it means that you are in the first path of the bucket
            }
            else {
            }
        });
    };
    ControllerComponent = __decorate([
        core_1.Component({
            selector: 'app-controller',
            templateUrl: './controller.component.html',
            styleUrls: ['./controller.component.css']
        })
    ], ControllerComponent);
    return ControllerComponent;
}());
exports.ControllerComponent = ControllerComponent;
