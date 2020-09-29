"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServiceclientService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var io = require("socket.io-client");
var rxjs_1 = require("rxjs");
/**
 *  @class @type{ServiceclientService} This class is responsible for and ensures the transmission and reception of the request and the socket.io event
 *
 */
var ServiceclientService = /** @class */ (function () {
    /**
    *
    * @param http {HttpClient} Http request handler
    * @param win {WinService} Service to show the snack bar common errors of requests
    * @param auth_serv {AuthServiceService} Authentification Service
    *
    */
    function ServiceclientService(http, win, auth_serv) {
        this.http = http;
        this.win = win;
        this.auth_serv = auth_serv;
        this.socket = io('http://localhost:3000'); /** *Socket.io listening path */
        this.socket = io('http://localhost:3000');
        this.id = localStorage.getItem('id');
    }
    /**
     *
     *
     * @param prefix {String} prefix for the path
     * @param del  {String} delimeter
     *@returns  {Promise<Filemodel[]>}  the response of the request
    */
    ServiceclientService.prototype.get_bucket_data = function (path, prefix, del) {
        if (prefix === void 0) { prefix = ""; }
        if (del === void 0) { del = ""; }
        var _params = new http_1.HttpParams()
            .set("prefix", prefix)
            .set("del", del);
        return this.http.get("http://localhost:3000/user/get_buckets_data", { params: _params });
    };
    /**
     *
     * @param prefix {String} the prefix of the folder that will be created
     * @returns  {Promise}  the response of the request
     */
    ServiceclientService.prototype.create_folder = function (prefix) {
        if (prefix === void 0) { prefix = ""; }
        return this.http.post("http://localhost:3000/user/createfolder", { foldername: prefix }).toPromise();
    };
    /**
     *@description verified the existance of the folder that will be create in the future
     * @param prefix
     * @param file
     * @returns {Promise<JSON>} value @type{Boolean}
     */
    ServiceclientService.prototype.Verifier_object_exist = function (prefix, file) {
        if (prefix === void 0) { prefix = ""; }
        if (file === void 0) { file = false; }
        if (file) {
            return this.http.post("http://localhost:3000/user/verifyfolder", { foldername: prefix }).toPromise();
        }
        return this.http.post("http://localhost:3000/user/verifyfolder", { foldername: prefix + "/" }).toPromise();
    };
    /**
      *@description Upload File to specific path
      * @param prefix {String} prefix of  file
      * @param File_data_format {imagedata[]}
      * @returns {Promise<JSON>}
      */
    ServiceclientService.prototype.upload_file = function (File_data_format, path) {
        var data = new Array();
        File_data_format.forEach(function (elem) {
            data.push({ aws_data: { data: elem.path, name: path + elem.file_name, type: elem.type, buket_name: "" } });
        });
        return this.http.post('http://localhost:3000/image/upload', data).toPromise();
    };
    /**
     * @description Generate a download link
     * @param prefix {string} the prefix of file
     * @returns {Promise<String>} the file Download Link
     */
    ServiceclientService.prototype.get_link = function (prefix) {
        var params = new http_1.HttpParams().set("prefix", prefix);
        return this.http.get('http://localhost:3000/image/fileLink', { params: params }).toPromise();
    };
    /**
     *@description Generate an expire download link
     * @param prefix  {String} prefix of file
     * @param expire_date  {Number} expire date in milliseconde
     * @returns {Promise<String>} the file expire Download  Link
     */
    ServiceclientService.prototype.get_expire_link = function (prefix, expire_date) {
        var params = new http_1.HttpParams().set("prefix", prefix).set("bucket_name", this.id).set('expiretime', expire_date + "");
        return this.http.get('http://localhost:3000/image/fileexpirelink', { params: params }).toPromise();
    };
    /**
     *@description This method sends you a file link to a corresponding user group
     * @param emails {email_sender} Emails senders
     * @returns {MatSnackBar} status of the request to the mailer
     */
    ServiceclientService.prototype.send_email = function (emails) {
        var _this = this;
        console.log(emails);
        this.http.post('http://localhost:3000/user/sendmail', emails).toPromise().then(function () {
            _this.win.open_success_snake({ message: "Successfully sent ", image: "https://img.icons8.com/clouds/50/000000/cloud-mail.png" });
        })["catch"](function (err) {
            _this.win.open_snak_error({ message: " Please Check your Emails ! ", image: "https://img.icons8.com/fluent/48/000000/important-mail.png" });
        });
    };
    /**
     *@description Delete A file or  a Folder
     * @param Files {Filemodel[]} The files that will be deleted
     * @returns {MatSnackBar} Status of response
     */
    ServiceclientService.prototype.Delete_objects = function (Files) {
        var _this = this;
        var id = this.auth_serv.get_user_info().user_id;
        return this.http.post("http://localhost:3000/user/Deletefiles", { Files: Files }).toPromise().then(function (data) {
            _this.win.open_success_snake({ message: data.message, image: 'https://img.icons8.com/plasticine/50/000000/delete-forever.png' });
        });
    };
    /**
     *@description This method allows to rename a file or to copied
     * @param data{JSON} contains the old_name of the file and the new_name of the file
     */
    ServiceclientService.prototype.File_cpoy = function (data) {
        this.http.post("http://localhost:3000/user/renamefile", { bucket_name: this.id, oldkey: data.oldkey, newkey: data.newkey })
            .toPromise().then(function () {
        });
    };
    /**
     * @description this method allows connection to socket.io
     * @param id id of user
     * @return {Observable}
     */
    ServiceclientService.prototype.switch_to_real_data = function (id) {
        if (id === void 0) { id = ""; }
        this.socket.emit("switchtorealtime", {
            id: this.id
        });
    };
    ServiceclientService.prototype.listen_to_real_data = function () {
        var _this = this;
        return new rxjs_1.Observable(function (sub) {
            _this.socket.on('get_bucket_list', function (data) {
                sub.next(data);
            });
        });
    };
    /**
     *
     * @param Files {Filemodel[]} The Zipped files
     * @param file_name {String} the name of zip file
      */
    ServiceclientService.prototype.upload_file_zip = function (Files, file_name) {
        return this.http.post('http://localhost:3000/user/zipedfiles', { bucket_name: this.id, fileskey: Files, file: file_name }).toPromise();
    };
    /**
     * @description This method returns the data to display the chart
     * @returns {Array<Action>} Action could be a write action or read
     */
    ServiceclientService.prototype.get_chart_static = function () {
        var param = new http_1.HttpParams().set('id', this.id);
        return this.http.get('http://localhost:3000/user/chart_user', { params: param }).toPromise();
    };
    /**
     * @description connect to socket.io to receive real-time chart data
     * @return {Observable}
     */
    ServiceclientService.prototype.get_chart_data = function () {
        var _this = this;
        return new rxjs_1.Observable(function (sub) {
            _this.socket.on('get_chart_data', function (data) {
                sub.next(data);
            });
        });
    };
    ServiceclientService.prototype.Generate_access_folder_link = function (folder) {
        return this.http.post('http://localhost:3000/image/Accesslink', { folder: folder }).toPromise();
    };
    ServiceclientService.prototype.get_groups = function () {
        return this.http.get('http://localhost:3000/user/groups');
    };
    ServiceclientService.prototype.get_others_users_basic_info = function (email) {
        var param = new http_1.HttpParams().set('email', email);
        return this.http.get('http://localhost:3000/user/userbyemail', { params: param });
    };
    ServiceclientService.prototype.user_exist = function (email) {
        var param = new http_1.HttpParams().set('email', email);
        return this.http.get('http://localhost:3000/user/userexist', { params: param });
    };
    ServiceclientService.prototype.delete_group = function (groupid) {
        var _this = this;
        return this.http.post('http://localhost:3000/user/deletegroup', { groupid: groupid }).toPromise().then(function (data) {
            _this.win.open_success_snake({ message: data.message, image: 'https://img.icons8.com/plasticine/50/000000/delete-forever.png' });
        });
    };
    ServiceclientService.prototype.check_group_exist = function (groupname) {
        var param = new http_1.HttpParams().set('groupname', groupname);
        return this.http.get('http://localhost:3000/user/groupexist', { params: param }).toPromise();
    };
    ServiceclientService.prototype.rename_group = function (group_name, group_id) {
        return this.http.post('http://localhost:3000/user/renamegroup', { groupid: group_id, groupname: group_name }).toPromise();
    };
    ServiceclientService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ServiceclientService);
    return ServiceclientService;
}());
exports.ServiceclientService = ServiceclientService;
