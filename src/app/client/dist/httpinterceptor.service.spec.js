"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var app_module_1 = require("../app.module");
var httpinterceptor_service_1 = require("./httpinterceptor.service");
describe('HttpinterceptorService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [app_module_1.modules]
        });
        service = testing_1.TestBed.inject(httpinterceptor_service_1.HttpinterceptorService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
