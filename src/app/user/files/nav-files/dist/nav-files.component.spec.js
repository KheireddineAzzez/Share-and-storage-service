"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var app_module_1 = require("src/app/app.module");
var nav_files_component_1 = require("./nav-files.component");
describe('NavFilesComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [nav_files_component_1.NavFilesComponent],
            imports: [app_module_1.modules]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(nav_files_component_1.NavFilesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
