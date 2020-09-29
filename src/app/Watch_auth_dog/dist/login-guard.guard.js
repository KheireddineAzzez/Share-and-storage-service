"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginGuardGuard = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var io = require("socket.io-client");
var LoginGuardGuard = /** @class */ (function () {
    function LoginGuardGuard(http, router) {
        this.http = http;
        this.router = router;
        this.Verify = rxjs_1.Observable.create(function (obser) {
            setInterval(function () {
                if (localStorage.getItem('Token')) {
                    return true;
                }
                else {
                    return false;
                }
            }, 1);
        });
        this.sockte = io('http://localhost:3000');
    }
    LoginGuardGuard.prototype.canActivate = function () {
        if (localStorage.getItem('Token')) {
            return true;
        }
        else {
            this.router.navigate(['home']);
            return false;
        }
    };
    LoginGuardGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LoginGuardGuard);
    return LoginGuardGuard;
}());
exports.LoginGuardGuard = LoginGuardGuard;
