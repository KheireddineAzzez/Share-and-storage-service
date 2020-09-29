"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    /**
     *
     * @param win {WinService}  Service to show a snack bar contains the following errors
     * @param Authser {AuthServiceService}
     */
    function LoginComponent(win, Authser) {
        this.win = win;
        this.Authser = Authser;
        this.Email = "";
        this.password = "";
        this.hide = true; //hide side bar
        this.email_message_error = "";
        this.password_message_error = "";
        this.error_auth = false;
        this.error_password = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    /**
     * @description This method allows the client to verify two-factor authentication (Email,password)
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.Authser.login_account(this.Email, this.password, this.email_message_error, this.password_message_error, this.error_auth, this.error_password).then(function (data) {
            console.log(data);
            _this.password_message_error = data.password_message_error;
            _this.error_auth = data.error_auth;
            _this.email_message_error = data.email_message_error;
            _this.error_password = data.error_password;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
