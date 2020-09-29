"use strict";
exports.__esModule = true;
exports.get_user_foler = exports.create_mongo_folder = void 0;
var Folder_access_1 = require("../models/Folder_access");
var mongoose_1 = require("mongoose");
function create_mongo_folder(_folder, user_id) {
    _folder.id = new mongoose_1.mongo.ObjectID().toHexString();
    return new Folder_access_1.folder({
        _id_user: user_id,
        folder: _folder
    }).save();
}
exports.create_mongo_folder = create_mongo_folder;
function get_user_foler(_folder, user_id) {
    Folder_access_1.folder.find({ _id_user: Folder_access_1.folder }).update({});
}
exports.get_user_foler = get_user_foler;
