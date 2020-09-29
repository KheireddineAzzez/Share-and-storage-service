"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilesComponent = void 0;
var core_1 = require("@angular/core");
var FilesComponent = /** @class */ (function () {
    function FilesComponent(serv, rout, router) {
        this.serv = serv;
        this.rout = rout;
        this.router = router;
        this.path = "";
        this.real_path = "";
        this.file_even_delete = new core_1.EventEmitter();
        this.Menu_show = { addfolder: true, upload: true };
        this.file_even = new core_1.EventEmitter();
        this.Files_destruction = new Array();
        this.even = new core_1.EventEmitter();
        this.displayedColumns = ['check', 'nom', 'menu', 'date', 'size'];
    }
    FilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pathchange();
        this.file_even_delete.subscribe(function (da) {
            console.log(da);
        });
        this.serv.get_bucket_data("", "").toPromise().then(function () {
            _this.dataSource;
        });
    };
    FilesComponent.prototype.pathchange = function () {
        var _this = this;
        this.rout.params.subscribe(function (data) {
            _this.real_path = (data.id + "").replace('acceuil', "").replace('_', '/');
            console.log(data.id);
            var st = /\//g;
            var para_path = (data.id + "").toString().replace("_", '➜');
            para_path = para_path.toString().replace(st, '➜');
            console.log(para_path);
            if (!para_path.includes('acceuil')) {
                _this.path = ("acceuil➜" + para_path);
            }
            else {
                _this.path = para_path;
            }
        });
    };
    FilesComponent.prototype.add_delete_files = function (Files) {
        this.Files_destruction = Files;
    };
    FilesComponent.prototype.create_folder = function (folder_name) {
        var _this = this;
        console.log(this.real_path);
        this.serv.create_folder(this.real_path + folder_name + "/").then(function (data) {
            console.log(data['value']);
            if (data['value'] == true) {
                _this.even.emit(folder_name);
            }
        });
    };
    FilesComponent.prototype.create_file = function (data) {
        console.log(data[0].size);
        this.file_even.emit(data);
    };
    FilesComponent.prototype.deleted = function ($event) {
        this.file_even_delete.emit($event);
    };
    FilesComponent = __decorate([
        core_1.Component({
            selector: 'app-files',
            templateUrl: './files.component.html',
            styleUrls: ['./files.component.css']
        })
    ], FilesComponent);
    return FilesComponent;
}());
exports.FilesComponent = FilesComponent;
