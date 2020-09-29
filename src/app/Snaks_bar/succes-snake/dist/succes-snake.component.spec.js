"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var snack_bar_1 = require("@angular/material/snack-bar");
var app_module_1 = require("src/app/app.module");
var succes_snake_component_1 = require("./succes-snake.component");
describe('SuccesSnakeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [succes_snake_component_1.SuccesSnakeComponent],
            imports: [app_module_1.modules],
            providers: [{
                    provide: snack_bar_1.MatSnackBarRef,
                    useValue: {}
                }, {
                    provide: snack_bar_1.MAT_SNACK_BAR_DATA,
                    useValue: {} // Add any data you wish to test if it is passed/used correctly
                }]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(succes_snake_component_1.SuccesSnakeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
