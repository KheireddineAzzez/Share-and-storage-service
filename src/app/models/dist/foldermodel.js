"use strict";
exports.__esModule = true;
exports.Foldermodel = void 0;
var Foldermodel = /** @class */ (function () {
    function Foldermodel(nom, date, type) {
        var _this = this;
        this.checked = false;
        this.id = "";
        this.toString = function () {
            return _this.nom;
        };
        this.nom = nom;
        this.type = type;
        this.checked = false;
        this.date = date;
    }
    return Foldermodel;
}());
exports.Foldermodel = Foldermodel;
