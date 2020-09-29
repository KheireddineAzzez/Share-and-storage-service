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
exports.write = void 0;
var Action_1 = require("./Action");
var write = /** @class */ (function (_super) {
    __extends(write, _super);
    function write(nom, date, taile, type) {
        var _this = _super.call(this, nom, date, taile) || this;
        _this.type = "";
        _this.type = type;
        return _this;
    }
    return write;
}(Action_1.Action));
exports.write = write;
