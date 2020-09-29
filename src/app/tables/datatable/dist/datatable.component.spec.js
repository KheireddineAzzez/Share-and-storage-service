"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var datatable_component_1 = require("./datatable.component");
var testing_2 = require("@angular/common/http/testing");
var serviceclient_service_1 = require("src/app/client/serviceclient.service");
var testing_3 = require("@angular/router/testing");
var app_module_1 = require("src/app/app.module");
describe('DatatableComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [datatable_component_1.DatatableComponent],
            imports: [testing_2.HttpClientTestingModule, testing_3.RouterTestingModule, app_module_1.modules],
            providers: [serviceclient_service_1.ServiceclientService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(datatable_component_1.DatatableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
