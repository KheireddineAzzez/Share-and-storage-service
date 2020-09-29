"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var file_view_component_1 = require("./file-view.component");
describe('FileViewComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [file_view_component_1.FileViewComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(file_view_component_1.FileViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
