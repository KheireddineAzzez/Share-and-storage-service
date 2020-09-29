"use strict";
exports.__esModule = true;
exports.groupmodel = void 0;
var mongoose_1 = require("mongoose");
var Group = new mongoose_1["default"].Schema({
    _id: mongoose_1["default"].Schema.Types.ObjectId,
    groups: { type: Array() }
});
exports.groupmodel = mongoose_1["default"].model('groups', Group);
