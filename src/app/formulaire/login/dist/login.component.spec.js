"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var login_component_1 = require("./login.component");
var testing_2 = require("@angular/common/http/testing");
var auth_service_service_1 = require("src/app/client/auth-service.service");
var testing_3 = require("@angular/router/testing");
var forms_1 = require("@angular/forms");
describe('LoginComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [login_component_1.LoginComponent], imports: [testing_3.RouterTestingModule, testing_2.HttpClientTestingModule, forms_1.FormsModule],
            providers: [auth_service_service_1.AuthServiceService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(login_component_1.LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
