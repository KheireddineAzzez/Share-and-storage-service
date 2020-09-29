"use strict";
exports.__esModule = true;
exports.Action = void 0;
var Action = /** @class */ (function () {
    function Action(nom_action, date, Taile) {
        this.Nom_action = "";
        this.Date = new Date();
        this.Taile = 0;
        this.Nom_action = nom_action;
        this.Date = date;
        this.Taile = Taile;
    }
    return Action;
}());
exports.Action = Action;
