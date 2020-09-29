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
exports.file_share = void 0;
var filemodel_1 = require("./filemodel");
var file_share = /** @class */ (function (_super) {
    __extends(file_share, _super);
    function file_share() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(file_share.prototype, "owner_id", {
        get: function () {
            return this._owner_id;
        },
        set: function (value) {
            this._owner_id = value;
        },
        enumerable: false,
        configurable: true
    });
    return file_share;
}(filemodel_1.Filemodel));
exports.file_share = file_share;
