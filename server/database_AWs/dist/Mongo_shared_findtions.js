"use strict";
exports.__esModule = true;
var Folder_access_1 = require("../models/Folder_access");
function Save_user_folder(foldershare, user_id) {
    var _first_Shared_older_array = new Array();
    _first_Shared_older_array.push(foldershare);
    Folder_access_1.Foldershare.create({
        _id: user_id,
        sharefolders: _first_Shared_older_array
    });
}
