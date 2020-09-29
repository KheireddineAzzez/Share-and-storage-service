"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dialog_1 = require("@angular/material/dialog");
var win_service_1 = require("../win.service");
var files_upload_component_1 = require("./files-upload.component");
var testing_2 = require("@angular/common/http/testing");
var app_module_1 = require("src/app/app.module");
describe('FilesUploadComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [files_upload_component_1.FilesUploadComponent],
            imports: [testing_2.HttpClientTestingModule, app_module_1.modules],
            providers: [
                { provide: dialog_1.MatDialogRef, useValue: {} },
                { provide: dialog_1.MAT_DIALOG_DATA, useValue: [] },
                win_service_1.WinService
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(files_upload_component_1.FilesUploadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
