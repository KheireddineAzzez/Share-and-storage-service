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
exports.group_inv = void 0;
var invitation_1 = require("./invitation");
var group_inv = /** @class */ (function (_super) {
    __extends(group_inv, _super);
    function group_inv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return group_inv;
}(invitation_1.invitaion));
exports.group_inv = group_inv;
