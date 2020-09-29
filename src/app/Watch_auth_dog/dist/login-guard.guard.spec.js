"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var login_guard_guard_1 = require("./login-guard.guard");
var testing_2 = require("@angular/common/http/testing");
var app_module_1 = require("../app.module");
var serviceclient_service_1 = require("../client/serviceclient.service");
describe('LoginGuardGuard', function () {
    var guard;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.HttpClientTestingModule, app_module_1.modules],
            providers: [serviceclient_service_1.ServiceclientService]
        });
        guard = testing_1.TestBed.inject(login_guard_guard_1.LoginGuardGuard);
    });
    it('should be created', function () {
        expect(guard).toBeTruthy();
    });
});
