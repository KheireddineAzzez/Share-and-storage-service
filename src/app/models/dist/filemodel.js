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
exports.Filemodel = void 0;
var foldermodel_1 = require("./foldermodel");
var Filemodel = /** @class */ (function (_super) {
    __extends(Filemodel, _super);
    function Filemodel(nom, date, size, type) {
        var _this = _super.call(this, nom, date, type) || this;
        _this.size = size;
        _this.checked = false;
        return _this;
    }
    return Filemodel;
}(foldermodel_1.Foldermodel));
exports.Filemodel = Filemodel;
