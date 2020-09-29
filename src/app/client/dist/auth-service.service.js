"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthServiceService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var jwt = require("jsonwebtoken");
/**
  *
  * @class Authentification Class
  */
var AuthServiceService = /** @class */ (function () {
    function AuthServiceService(http, router, win) {
        this.http = http;
        this.router = router;
        this.win = win;
    }
    /**
     *
     *@description This method ensured the authentification and identification depend on the 2 factors (email , password )
     * @param email {string} email of user
     * @param password {string} password of user
     * @param email_message_error error email not found
     * @param password_message_error error password
     * @param error_auth
     * @param error_password
     */
    AuthServiceService.prototype.login_account = function (email, password, email_message_error, password_message_error, error_auth, error_password) {
        var _this = this;
        if (password === void 0) { password = ""; }
        var message;
        return this.http.post("http://localhost:3000/user/login", { email: email, password: password }).toPromise().then(function (data) {
            if (data['token']) {
                _this.set_token(data['token']);
                _this.router.navigate(['Userprofile/Files/acceuil']);
            }
            else {
                if ((data["message"] + "").includes("Password")) {
                    email_message_error = "";
                    error_password = data["value"];
                    password_message_error = data["message"];
                }
                else {
                    password_message_error = "";
                    error_auth = true;
                    error_auth = data["value"];
                    email_message_error = data['message'];
                }
            }
            return { email_message_error: email_message_error, error_password: error_password, password_message_error: password_message_error,
                error_auth: error_auth };
        });
    };
    /**
     * @description Create a new user
     * @param user User that will be created
     */
    AuthServiceService.prototype.create_acccount = function (user) {
        var _this = this;
        this.http.post("http://localhost:3000/user/createaccount", user).toPromise().then(function (data) {
            _this.set_token(data["Token"]);
            _this.router.navigate(['/Userprofile/Files/acceuil']);
        })["catch"](function (err) {
            _this.win.open_snak_error({ message: err.message, image: "https://img.icons8.com/dusk/45/000000/unverified-account.png" });
        });
    };
    /**
     * @description save the token
     * @param Token{String} Token of the user
     */
    AuthServiceService.prototype.set_token = function (Token) {
        console.log(Token);
        localStorage.setItem('Token', Token);
        var user_inf = jwt.decode(Token);
        localStorage.setItem('id', user_inf.user_id);
        this.router.navigate(['/Userprofile/Files/acceuil']);
    };
    /**
     * @description Return the token
     * @return {String}
     */
    AuthServiceService.prototype.get_token = function () {
        return window.localStorage.getItem('Token');
    };
    AuthServiceService.prototype.get_user_info = function () {
        return jwt.decode(localStorage.getItem('Token'));
    };
    AuthServiceService.prototype.get_user_data = function () {
        var user = new Object();
        user.user_id = "";
        var params = new http_1.HttpParams().set("id", user.user_id + "");
        return this.http.get("http://localhost:3000/user/user_info", { params: params }).toPromise();
    };
    /**
     * @description This method ensure the logout of user
     */
    AuthServiceService.prototype.log_out = function () {
        localStorage.removeItem("Token");
        localStorage.removeItem('id');
    };
    AuthServiceService.prototype.get_token_admition = function () {
        return this.http.get("http://localhost:3000/user/tokenverification").toPromise();
    };
    AuthServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthServiceService);
    return AuthServiceService;
}());
exports.AuthServiceService = AuthServiceService;
