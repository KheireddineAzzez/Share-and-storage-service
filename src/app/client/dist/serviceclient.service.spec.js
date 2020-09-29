"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var serviceclient_service_1 = require("./serviceclient.service");
var testing_2 = require("@angular/common/http/testing");
var win_service_1 = require("../Window-mon/win.service");
var testing_3 = require("@angular/router/testing");
var app_module_1 = require("../app.module");
describe('ServiceclientService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_3.RouterTestingModule, testing_2.HttpClientTestingModule, app_module_1.modules],
            providers: [win_service_1.WinService]
        });
        service = testing_1.TestBed.inject(serviceclient_service_1.ServiceclientService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
