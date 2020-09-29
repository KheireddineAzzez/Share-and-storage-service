"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var serviceclient_service_1 = require("src/app/client/serviceclient.service");
var chatuser_component_1 = require("./chatuser.component");
var app_module_1 = require("src/app/app.module");
var testing_2 = require("@angular/common/http/testing");
describe('ChatuserComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [chatuser_component_1.ChatuserComponent],
            imports: [app_module_1.modules, testing_2.HttpClientTestingModule],
            providers: [serviceclient_service_1.ServiceclientService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(chatuser_component_1.ChatuserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
