"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dialog_1 = require("@angular/material/dialog");
var testing_2 = require("@angular/router/testing");
var app_module_1 = require("src/app/app.module");
var zipfolder_component_1 = require("./zipfolder.component");
describe('ZipfolderComponent', function () {
    var component;
    var fixture;
    var mockDialogRef = {
        close: jasmine.createSpy('close')
    };
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [zipfolder_component_1.ZipfolderComponent],
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
        fixture = testing_1.TestBed.createComponent(zipfolder_component_1.ZipfolderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
