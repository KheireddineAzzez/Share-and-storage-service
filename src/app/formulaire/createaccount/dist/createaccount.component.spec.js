"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/common/http/testing");
var testing_2 = require("@angular/core/testing");
var auth_service_service_1 = require("src/app/client/auth-service.service");
var testing_3 = require("@angular/router/testing");
var createaccount_component_1 = require("./createaccount.component");
var app_module_1 = require("src/app/app.module");
var forms_1 = require("@angular/forms");
describe('CreateaccountComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_2.async(function () {
        testing_2.TestBed.configureTestingModule({
            declarations: [createaccount_component_1.CreateaccountComponent],
            imports: [testing_1.HttpClientTestingModule, testing_3.RouterTestingModule, forms_1.FormsModule],
            providers: [auth_service_service_1.AuthServiceService, app_module_1.modules]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_2.TestBed.createComponent(createaccount_component_1.CreateaccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
