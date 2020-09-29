"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateaccountComponent = void 0;
var core_1 = require("@angular/core");
var user_model_1 = require("../../models/user_model");
var validator = require("email-validator");
var CreateaccountComponent = /** @class */ (function () {
    /**
     *@param serv {AuthServiceService} Authentification service
     */
    function CreateaccountComponent(serv) {
        this.serv = serv;
        this.user = new user_model_1.user_class(); //user model
        this.age_tab = [];
        this.seconde_pass = ""; //seconde password
        this.email_valid = true; //email validation
        for (var index = 15; index <= 100; index++) {
            this.age_tab.push(index);
        }
    }
    CreateaccountComponent.prototype.ngOnInit = function () {
    };
    /**
     *
     * @description  This method allows to create user
     */
    CreateaccountComponent.prototype.create_user = function () {
        console.log(this.user);
        this.serv.create_acccount(this.user);
    };
    /**
     * @description This method allows the profile image treatment
     * @param $event Image
     */
    CreateaccountComponent.prototype.get_image = function ($event) {
        var _this = this;
        var element = $event.target.files[0];
        console.log(element);
        var reader_file = new FileReader();
        reader_file.readAsDataURL(element);
        reader_file.onload = function (eve) {
            _this.user.image = eve.target.result.toString();
        };
    };
    CreateaccountComponent.prototype.check_email_validation = function () {
        this.email_valid = validator.validate(this.user.email);
    };
    CreateaccountComponent = __decorate([
        core_1.Component({
            selector: 'app-createaccount',
            templateUrl: './createaccount.component.html',
            styleUrls: ['./createaccount.component.css']
        })
    ], CreateaccountComponent);
    return CreateaccountComponent;
}());
exports.CreateaccountComponent = CreateaccountComponent;
