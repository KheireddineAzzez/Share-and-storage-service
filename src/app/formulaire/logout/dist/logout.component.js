"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LogoutComponent = void 0;
var core_1 = require("@angular/core");
var LogoutComponent = /** @class */ (function () {
    /**
     *
     * @param router {Route} Angular route navigation
     * @param service {Auth} Authentification service
     */
    function LogoutComponent(router, service) {
        this.router = router;
        this.service = service;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigated = false;
            _this.service.log_out();
            _this.router.navigate(['home']).then(function () {
                window.location.reload();
            });
        }, 1000);
    };
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'app-logout',
            templateUrl: './logout.component.html',
            styleUrls: ['./logout.component.css']
        })
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
