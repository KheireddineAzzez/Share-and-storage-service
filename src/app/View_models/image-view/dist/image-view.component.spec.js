"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var image_view_component_1 = require("./image-view.component");
describe('ImageViewComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [image_view_component_1.ImageViewComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(image_view_component_1.ImageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
