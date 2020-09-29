"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.DatatableComponent = void 0;
var core_1 = require("@angular/core");
var table_1 = require("@angular/material/table");
var DatatableComponent = /** @class */ (function () {
    function DatatableComponent(serv, rout, router) {
        this.serv = serv;
        this.rout = rout;
        this.router = router;
        this.Check_all = false;
        this.event_delete = new core_1.EventEmitter(); //Event From the navbar to fire the action of delete
        this.Files_are_complete_deleted = new core_1.EventEmitter();
        this.show_delete_file = new core_1.EventEmitter(true);
        this.path = "";
        this.displayedColumns = ['check', 'nom', 'menu', 'date', 'size'];
        this.cheked_item = new Array(); //The chekced items
        this.show_spinner = false;
        this.show_data_transfert = true;
    }
    DatatableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.get_bucket_data(this.path, "", '/').subscribe(function (data) {
            _this.show_data_transfert = false;
            _this.dataSource = new table_1.MatTableDataSource(data);
        });
        this.serv.switch_to_real_data(); //swith to real data
        this.serv.listen_to_real_data().subscribe(function (data) {
            if (_this.path == data.general_path) {
                console.log(data.data);
                _this.dataSource.data = data.data;
            }
            _this.dataSource.filter = "";
            _this.dataSource._updateChangeSubscription(); //update the table
        });
        this.Files_are_complete_deleted.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
            var _i, data_1, el, index;
            return __generator(this, function (_a) {
                for (_i = 0, data_1 = data; _i < data_1.length; _i++) {
                    el = data_1[_i];
                    index = this.dataSource.data.indexOf(el);
                    this.dataSource.data.splice(index, 1);
                }
                data.length = 0;
                this.dataSource.filter = "";
                return [2 /*return*/];
            });
        }); });
        this.sub_url_para();
        this._listen_to_folder_creation();
        this._listen_to_file_creation();
    };
    DatatableComponent.prototype._listen_to_folder_creation = function () {
        var _this = this;
        if (this.Folder_created != undefined) {
            return this.Folder_created.subscribe(function (data) {
                console.log(data + "new folder");
                _this.dataSource.filter = "";
            });
        }
    };
    /**
     * @description  Method to rename the file
     * @param $event File or folder
     *
     */
    DatatableComponent.prototype.rename_file = function ($event) {
        this.dataSource.data[$event.index].nom = $event.new_name + $event.old_name.substr($event.old_name.indexOf('.'));
        this.dataSource.filter = "";
    };
    /**
     *@description This method Allows to check or uncheck  a specific folder or file
    * @param folder  The checked folder
    *
    */
    DatatableComponent.prototype.fire_delet_event = function (folder) {
        if (folder.checked == false) {
            this.cheked_item.push(folder);
        }
        else {
            var index = this.cheked_item.indexOf(folder, 0);
            if (index > -1) {
                this.cheked_item.splice(index, 1);
            }
        }
        this.event_delete.emit(this.cheked_item); //emit the event to the navbar
        this.check_all_selected();
    };
    /**
     *
     * @description this method allow to extact the correct name from the real prefix
     * @param name the prefix of file or folder
     */
    DatatableComponent.prototype.get_correct_folder_file_name = function (name) {
        var _Path_name = name.split('/');
        if (_Path_name.length >= 1) {
            return _Path_name[_Path_name.length - 1];
        }
        else {
            return name;
        }
    };
    /**
     * Function canceled after reverse to real time(req,res) with socket.io
     */
    DatatableComponent.prototype._listen_to_file_creation = function () {
        if (this.Folder_created != undefined) {
            this.File_created.subscribe(function (data) {
                console.log(data);
                /*data.forEach(ele=>{
                console.log(ele.file_name)
                this.dataSource.data.push(new Filemodel(this.path+ele.file_name,ele.last_modified,(ele.size/1000),'file'))
                
                })*/
                /*this.dataSource.filter=""*/
            });
        }
    };
    /**
     * @description this method allow to Check all files
     */
    DatatableComponent.prototype.Check_all_file = function () {
        var _a;
        if (this.Check_all == false) {
            this.dataSource.data.map(function (val) { val.checked = true; });
            this.cheked_item.length = 0;
            (_a = this.cheked_item).push.apply(_a, this.dataSource.data);
            this.event_delete.emit(this.cheked_item);
        }
        else {
            this.dataSource.data.map(function (val) { val.checked = false; });
            this.cheked_item.length = 0;
            this.Check_all = true;
        }
    };
    /**
     *@description  This method allows to access
    * @param prefix the prefix of Folder
    */
    DatatableComponent.prototype.folder_acces = function (prefix) {
        var _this = this;
        var url = prefix.replace('/', '_');
        this.router.navigate(['Userprofile/Files/', url]).then(function () {
            console.log(_this.path);
        });
    };
    /**
     * @description Handler the url parametre
     *
     */
    DatatableComponent.prototype.sub_url_para = function () {
        var _this = this;
        this.rout.params.subscribe(function (data_param) {
            _this.path = (data_param.id + "").replace("_", '/').replace("acceuil", "");
            var id = data_param.id + "";
            var final_pre = id.replace('_', '/');
            if (data_param.id != "acceuil") { //if the path is equal to acceuil it means that you are in the first path of the bucket
                _this.serv.get_bucket_data("", final_pre, '/' + "").subscribe(function (data) {
                    _this.dataSource.data = data;
                });
            }
            else {
                _this.serv.get_bucket_data("", "", '/').subscribe(function (data) {
                    _this.dataSource.data = data;
                });
            }
        });
    };
    DatatableComponent.prototype.check_all_selected = function () {
        if (this.cheked_item.length == this.dataSource.data.length) {
            this.Check_all = true;
        }
        else {
            this.Check_all = false;
        }
    };
    __decorate([
        core_1.Input()
    ], DatatableComponent.prototype, "Folder_created");
    __decorate([
        core_1.Output()
    ], DatatableComponent.prototype, "event_delete");
    __decorate([
        core_1.Input()
    ], DatatableComponent.prototype, "Files_destruction");
    __decorate([
        core_1.Input()
    ], DatatableComponent.prototype, "Files_are_complete_deleted");
    __decorate([
        core_1.Input()
    ], DatatableComponent.prototype, "File_created");
    __decorate([
        core_1.Output()
    ], DatatableComponent.prototype, "show_delete_file");
    __decorate([
        core_1.Input()
    ], DatatableComponent.prototype, "path");
    DatatableComponent = __decorate([
        core_1.Component({
            selector: 'app-datatable',
            templateUrl: './datatable.component.html',
            styleUrls: ['./datatable.component.css']
        })
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;
