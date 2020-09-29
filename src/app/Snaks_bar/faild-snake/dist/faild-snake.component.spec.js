"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var app_module_1 = require("src/app/app.module");
var faild_snake_component_1 = require("./faild-snake.component");
var snack_bar_1 = require("@angular/material/snack-bar");
describe('FaildSnakeComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [faild_snake_component_1.FaildSnakeComponent],
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
        fixture = testing_1.TestBed.createComponent(faild_snake_component_1.FaildSnakeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
