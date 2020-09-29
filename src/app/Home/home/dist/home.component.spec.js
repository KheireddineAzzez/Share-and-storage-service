"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var win_service_1 = require("src/app/Window-mon/win.service");
var home_component_1 = require("./home.component");
var testing_2 = require("@angular/router/testing");
var app_module_1 = require("src/app/app.module");
describe('HomeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [home_component_1.HomeComponent],
            imports: [testing_2.RouterTestingModule, app_module_1.modules],
            providers: [win_service_1.WinService]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(home_component_1.HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
