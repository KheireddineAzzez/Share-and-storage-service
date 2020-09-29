"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TableDataComponent = void 0;
var core_1 = require("@angular/core");
var TableDataComponent = /** @class */ (function () {
    function TableDataComponent(route, router) {
        this.route = route;
        this.router = router;
        this.displayedColumns = ['check', 'name', "menu", 'date', 'size'];
    }
    TableDataComponent.prototype.ngOnInit = function () {
    };
    TableDataComponent.prototype.get_correct_folder_file_name = function (name) {
        var _Path_name = name.split('/');
        if (name.lastIndexOf('/') + 1 == name.length) {
            return (_Path_name[_Path_name.length - 2] + "/");
        }
        if (_Path_name.length >= 1) {
            return _Path_name[_Path_name.length - 1];
        }
        else {
            return name;
        }
    };
    TableDataComponent.prototype.acce_folder = function (Token) {
        this.router.navigate(['sharepoint/', Token]);
    };
    __decorate([
        core_1.Input()
    ], TableDataComponent.prototype, "dataSource");
    TableDataComponent = __decorate([
        core_1.Component({
            selector: 'app-table-data',
            templateUrl: './table-data.component.html',
            styleUrls: ['./table-data.component.css']
        })
    ], TableDataComponent);
    return TableDataComponent;
}());
exports.TableDataComponent = TableDataComponent;
