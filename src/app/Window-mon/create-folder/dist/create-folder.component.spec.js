"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dialog_1 = require("@angular/material/dialog");
var auth_service_service_1 = require("src/app/client/auth-service.service");
var win_service_1 = require("../win.service");
var create_folder_component_1 = require("./create-folder.component");
var testing_2 = require("@angular/router/testing");
var app_module_1 = require("src/app/app.module");
describe('CreateFolderComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [create_folder_component_1.CreateFolderComponent],
            imports: [
                dialog_1.MatDialogModule, testing_2.RouterTestingModule, app_module_1.modules
            ],
            providers: [
                { provide: dialog_1.MAT_DIALOG_DATA, useValue: {} },
                { provide: dialog_1.MatDialogRef, useValue: {} },
                win_service_1.WinService,
                auth_service_service_1.AuthServiceService
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(create_folder_component_1.CreateFolderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
