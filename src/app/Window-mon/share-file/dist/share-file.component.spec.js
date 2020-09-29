"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dialog_1 = require("@angular/material/dialog");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
var app_module_1 = require("src/app/app.module");
var share_file_component_1 = require("./share-file.component");
describe('ShareFileComponent', function () {
    var component;
    var fixture;
    var mockDialogRef = {
        close: jasmine.createSpy('close')
    };
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [share_file_component_1.ShareFileComponent],
            imports: [dialog_1.MatDialogModule, app_module_1.modules],
            providers: [
                {
                    provide: dialog_1.MatDialogRef,
                    useValue: mockDialogRef
                },
                { provide: dialog_1.MAT_DIALOG_DATA, useValue: {} },
                { provide: dialog_1.MatDialogRef, useValue: {} }
            ]
        });
        testing_1.TestBed.overrideModule(testing_2.BrowserDynamicTestingModule, {
            set: { entryComponents: [share_file_component_1.ShareFileComponent] }
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(share_file_component_1.ShareFileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
