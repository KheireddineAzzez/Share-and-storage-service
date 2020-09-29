"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dialog_1 = require("@angular/material/dialog");
var testing_2 = require("@angular/router/testing");
var app_module_1 = require("src/app/app.module");
var menu_file_component_1 = require("./menu-file.component");
describe('MenuFileComponent', function () {
    var component;
    var fixture;
    var mockDialogRef = {
        close: jasmine.createSpy('close')
    };
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [menu_file_component_1.MenuFileComponent],
            imports: [testing_2.RouterTestingModule, app_module_1.modules],
            providers: [
                {
                    provide: dialog_1.MatDialogRef,
                    useValue: mockDialogRef
                },
                { provide: dialog_1.MAT_DIALOG_DATA, useValue: {} },
                { provide: dialog_1.MatDialogRef, useValue: {} }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(menu_file_component_1.MenuFileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
