"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var dialog_1 = require("@angular/material/dialog");
var win_service_1 = require("./win.service");
describe('WinService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [
                { provide: dialog_1.MatDialogRef, useValue: {} },
                { provide: dialog_1.MAT_DIALOG_DATA, useValue: [] },
            ]
        });
        service = testing_1.TestBed.inject(win_service_1.WinService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
