"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpinterceptorService = void 0;
var core_1 = require("@angular/core");
var auth_service_service_1 = require("./auth-service.service");
var operators_1 = require("rxjs/operators");
/**
 *@description This service intercept the request
 */
var HttpinterceptorService = /** @class */ (function () {
    function HttpinterceptorService(Inj, router) {
        this.Inj = Inj;
        this.router = router;
        this.auth_service = this.Inj.get(auth_service_service_1.AuthServiceService);
    }
    HttpinterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        /**
         *   Handle the request
         */
        var token = req.clone({
            setHeaders: {
                Authorization: "Bearer " + this.auth_service.get_token()
            }
        });
        /**
         * // call next() and handle the response
        
         */
        return next.handle(token).pipe(operators_1.catchError(function (error) {
            console.log(error);
            if (error.status == 401 || error.status == 404 || error.status == 403 || error.status == 404) {
                _this.auth_service.log_out();
                _this.router.navigate(['home']);
            }
            else if (error.status == 406) {
                _this.router.navigate(['Error401']);
            }
            else {
                return next.handle(token);
            }
        }));
    };
    HttpinterceptorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], HttpinterceptorService);
    return HttpinterceptorService;
}());
exports.HttpinterceptorService = HttpinterceptorService;
