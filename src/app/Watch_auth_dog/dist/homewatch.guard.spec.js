"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var homewatch_guard_1 = require("./homewatch.guard");
var testing_2 = require("@angular/router/testing");
describe('HomewatchGuard', function () {
    var guard;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule]
        });
        guard = testing_1.TestBed.inject(homewatch_guard_1.HomewatchGuard);
    });
    it('should be created', function () {
        expect(guard).toBeTruthy();
    });
});
