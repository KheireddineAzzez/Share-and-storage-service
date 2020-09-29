"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var auth_service_service_1 = require("src/app/client/auth-service.service");
var logout_component_1 = require("./logout.component");
var testing_3 = require("@angular/common/http/testing");
describe('LogoutComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [logout_component_1.LogoutComponent],
            imports: [testing_2.RouterTestingModule, testing_3.HttpClientTestingModule],
            providers: [auth_service_service_1.AuthServiceService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(logout_component_1.LogoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
