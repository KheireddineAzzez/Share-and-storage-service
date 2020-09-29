"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavFilesComponent = void 0;
/**
* @description This class handle Events like (Delete,Create new folder,Zippe a group of files ,upload Files)
*/
var core_1 = require("@angular/core");
var create_folder_component_1 = require("src/app/Window-mon/create-folder/create-folder.component");
var files_upload_component_1 = require("src/app/Window-mon/files-upload/files-upload.component");
var zipfolder_component_1 = require("src/app/Window-mon/zipfolder/zipfolder.component");
var NavFilesComponent = /** @class */ (function () {
    function NavFilesComponent(ser, rout, client_ser) {
        this.ser = ser;
        this.rout = rout;
        this.client_ser = client_ser;
        this.Create_folder = new core_1.EventEmitter();
        this.create_files = new core_1.EventEmitter();
        this.deleted_file = new Array();
        this.files_deleted = new core_1.EventEmitter();
        this.show_menu = { addfolder: Boolean, upload: Boolean };
        this.folder_name = "";
        this.current_path = "";
    }
    NavFilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rout.params.subscribe(function (datas) {
            if ((datas.id + "").includes('acceuil'))
                return _this.current_path = "";
            _this.current_path = (datas.id + "").replace('acceuil', '');
            _this.current_path = _this.current_path.replace('_', '/');
            console.log(_this.current_path);
        });
    };
    /**
     * @description open window to create file
     */
    NavFilesComponent.prototype.open_window = function () {
        var _this = this;
        var folder_creation = new Object();
        folder_creation.accepted = false,
            folder_creation.path = this.current_path;
        folder_creation.folder_name = "";
        this.ser.open_folder_creation(create_folder_component_1.CreateFolderComponent, folder_creation).afterClosed().subscribe(function (data) {
            if (folder_creation.accepted) {
                console.log(folder_creation.folder_name);
                _this.Create_folder.emit(data.folder_name);
            }
        });
    };
    /**
     * @description upload All droped files
     */
    NavFilesComponent.prototype.open_file_upload = function () {
        var _this = this;
        this.ser.open_upload_files(files_upload_component_1.FilesUploadComponent, this.current_path).afterClosed().subscribe(function (data) {
            /**
          * @description Emit data to Datatable
          */
            _this.client_ser.upload_file(data, _this.current_path).then(function () {
            });
            _this.create_files.emit(data);
        });
    };
    /**
     * @description Delete ALL chekced Files
     */
    NavFilesComponent.prototype.delete_files = function () {
        var _this = this;
        this.client_ser.Delete_objects(this.deleted_file).then(function () {
            return Promise.resolve(_this.files_deleted.emit(_this.deleted_file)).then(function (der) {
            });
        });
    };
    /**
     * @description This method Zipped a Group of files
     */
    NavFilesComponent.prototype.Zipp_files = function () {
        var _this = this;
        var File_name = "";
        var folder_creation = new Object();
        this.ser.open_ziper_files(zipfolder_component_1.ZipfolderComponent, folder_creation.nom).afterClosed().subscribe(function (data) {
            if (data != "") {
                console.log("data1", data);
                folder_creation.nom = data;
                _this.client_ser.upload_file_zip(_this.deleted_file, folder_creation).then(function (data) {
                    console.log(data);
                });
            }
        });
    };
    __decorate([
        core_1.Output()
    ], NavFilesComponent.prototype, "Create_folder");
    __decorate([
        core_1.Output()
    ], NavFilesComponent.prototype, "create_files");
    __decorate([
        core_1.Input()
    ], NavFilesComponent.prototype, "deleted_file");
    __decorate([
        core_1.Output()
    ], NavFilesComponent.prototype, "files_deleted");
    __decorate([
        core_1.Input()
    ], NavFilesComponent.prototype, "show_menu");
    NavFilesComponent = __decorate([
        core_1.Component({
            selector: 'app-nav-files',
            templateUrl: './nav-files.component.html',
            styleUrls: ['./nav-files.component.css']
        })
    ], NavFilesComponent);
    return NavFilesComponent;
}());
exports.NavFilesComponent = NavFilesComponent;
