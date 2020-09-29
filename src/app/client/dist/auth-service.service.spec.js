"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var auth_service_service_1 = require("./auth-service.service");
var testing_3 = require("@angular/common/http/testing");
var app_module_1 = require("../app.module");
var dialog_1 = require("@angular/material/dialog");
describe('AuthServiceService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule, testing_3.HttpClientTestingModule, app_module_1.modules],
            providers: [
                { provide: dialog_1.MatDialogRef, useValue: {} },
            ]
        });
        service = testing_1.TestBed.inject(auth_service_service_1.AuthServiceService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
