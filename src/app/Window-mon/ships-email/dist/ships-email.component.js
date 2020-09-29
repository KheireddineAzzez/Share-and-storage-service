"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShipsEmailComponent = void 0;
var core_1 = require("@angular/core");
var keycodes_1 = require("@angular/cdk/keycodes");
var ShipsEmailComponent = /** @class */ (function () {
    function ShipsEmailComponent(ser) {
        this.ser = ser;
        this.separatorKeysCodes = [keycodes_1.ENTER, keycodes_1.COMMA, keycodes_1.SPACE];
    }
    ShipsEmailComponent.prototype.ngOnInit = function () {
    };
    ShipsEmailComponent.prototype.remove = function (el) {
        var index = this.Emails.indexOf(el);
        if (index >= 0) {
            this.Emails.splice(index, 1);
        }
    };
    ShipsEmailComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.Emails.push(value.trim());
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    __decorate([
        core_1.Input()
    ], ShipsEmailComponent.prototype, "Emails");
    ShipsEmailComponent = __decorate([
        core_1.Component({
            selector: 'app-ships-email',
            templateUrl: './ships-email.component.html',
            styleUrls: ['./ships-email.component.css']
        })
    ], ShipsEmailComponent);
    return ShipsEmailComponent;
}());
exports.ShipsEmailComponent = ShipsEmailComponent;
