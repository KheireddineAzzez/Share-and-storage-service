"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose_1 = require("mongoose");
var user = new mongoose_1["default"].Schema({
    _id: { type: mongoose_1["default"].Schema.Types.ObjectId },
    email: { required: true, type: String, unique: true },
    password: { required: true, type: mongoose_1["default"].Schema.Types.String },
    age: { required: true, type: mongoose_1["default"].Schema.Types.String },
    sexe: { type: mongoose_1["default"].Schema.Types.String },
    username: { required: true, type: mongoose_1["default"].Schema.Types.String },
    image: { required: true, type: mongoose_1["default"].Schema.Types.String },
    read: { type: Array() },
    Write: { type: Array() },
    shares_folders: { type: Array() }
});
exports.User = mongoose_1["default"].model('User', user);
