"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
var iterface_view_component_1 = require("./iterface-view.component");
var testing_3 = require("@angular/common/http/testing");
var auth_service_service_1 = require("src/app/client/auth-service.service");
var testing_4 = require("@angular/router/testing");
describe('IterfaceViewComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [iterface_view_component_1.IterfaceViewComponent], imports: [testing_3.HttpClientTestingModule, testing_2.BrowserDynamicTestingModule, testing_4.RouterTestingModule],
            providers: [auth_service_service_1.AuthServiceService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(iterface_view_component_1.IterfaceViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
