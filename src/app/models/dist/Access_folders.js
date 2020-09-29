"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Acces_folders = void 0;
var foldermodel_1 = require("./foldermodel");
var Acces_folders = /** @class */ (function (_super) {
    __extends(Acces_folders, _super);
    function Acces_folders(nom, date, type) {
        var _this = _super.call(this, nom, date, type) || this;
        _this.Token = "";
        _this.date_createion = new Date();
        _this.Emails_auth = new Array();
        return _this;
    }
    return Acces_folders;
}(foldermodel_1.Foldermodel));
exports.Acces_folders = Acces_folders;
