"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var image_component_1 = require("./image.component");
var testing_2 = require("@angular/common/http/testing");
describe('ImageComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [image_component_1.ImageComponent],
            imports: [testing_2.HttpClientTestingModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(image_component_1.ImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
