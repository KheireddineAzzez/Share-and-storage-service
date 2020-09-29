"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var app_module_1 = require("src/app/app.module");
var ships_email_component_1 = require("./ships-email.component");
var testing_2 = require("@angular/common/http/testing");
var serviceclient_service_1 = require("src/app/client/serviceclient.service");
describe('ShipsEmailComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [ships_email_component_1.ShipsEmailComponent],
            imports: [app_module_1.modules, testing_2.HttpClientTestingModule],
            providers: [serviceclient_service_1.ServiceclientService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(ships_email_component_1.ShipsEmailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
