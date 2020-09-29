"use strict";
exports.__esModule = true;
exports.folder = void 0;
var mongoose_1 = require("mongoose");
var Folder = new mongoose_1["default"].Schema({
    _iduser: { type: mongoose_1["default"].Schema.Types.ObjectId, ref: 'User' },
    folders: { type: mongoose_1["default"].Schema.Types.Array }
});
exports.folder = mongoose_1["default"].model('Folders', Folder);
