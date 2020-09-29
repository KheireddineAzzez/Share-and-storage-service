"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var nav_home_component_1 = require("./nav-home.component");
describe('NavHomeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [nav_home_component_1.NavHomeComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(nav_home_component_1.NavHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
