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
exports.read = void 0;
var Action_1 = require("./Action");
var read = /** @class */ (function (_super) {
    __extends(read, _super);
    function read(nom_action, date, taile) {
        var _this = _super.call(this, nom_action, date, taile) || this;
        _this._view = false;
        return _this;
    }
    return read;
}(Action_1.Action));
exports.read = read;
