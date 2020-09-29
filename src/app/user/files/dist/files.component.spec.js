"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var files_component_1 = require("./files.component");
var testing_2 = require("@angular/common/http/testing");
var testing_3 = require("@angular/router/testing");
describe('FilesComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [files_component_1.FilesComponent], imports: [testing_2.HttpClientTestingModule, testing_3.RouterTestingModule]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(files_component_1.FilesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
