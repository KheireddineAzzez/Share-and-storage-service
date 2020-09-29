"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ChatuserComponent = void 0;
/**
* @description This Class responsible on the charts display
*/
var core_1 = require("@angular/core");
var ChatuserComponent = /** @class */ (function () {
    function ChatuserComponent(service, auth) {
        this.service = service;
        this.auth = auth;
        this.Menu_nav_hide = false; //Hide the nav bar
        /**
         * data_write contains all writed action
         * @type {Array<number>}
         */
        this.data_write = new Array();
        this.array_data = new Array();
        this.lineroption = new Object();
        this.barChartData = [];
        this.lineChartLabels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.lineChartOptions = {
            responsive: true
        };
        /**  Delete Color */
        this.Delete_chart_color = [
            {
                borderColor: 'black',
                backgroundColor: '    rgb(95,99,71,0.50)   ',
                hoverBackgroundColor: 'dds'
            },
        ];
        /**  Upload Color */
        this.lineChartColors = [
            {
                borderColor: 'black',
                backgroundColor: 'rgb(225,99,71,0.50)      ',
                hoverBackgroundColor: 'dds'
            },
        ];
        this.lineChartLegend = true;
        this.lineChartPlugins = [];
        this.lineChartType = 'line';
        this.barch_deletedata = [];
    }
    ;
    ChatuserComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.service.listen_to_real_data().subscribe();
                        return [4 /*yield*/, this.service.get_chart_static().then(function (data) {
                                /**
                                 *
                                 * subscribe to chart soket.io
                                 * @type { ServiceclientService } METHOD
                                 */
                                var write_upload = _this.filter_write_data(data.chart_write.filter(function (val) { if (val.type == 'upload') {
                                    return val;
                                } })); //
                                var Delete_data = _this.filter_write_data(data.chart_write.filter(function (val) { if (val.type == 'Delete') {
                                    return val;
                                } }));
                                _this.barChartData.push({ data: write_upload, label: 'Uploaded DATA Per MB' });
                                _this.barch_deletedata.push({ data: Delete_data, label: 'Deleted DATA Per MB' });
                            })];
                    case 1:
                        _a.sent();
                        this.service.get_chart_data().subscribe(function (data) {
                            var write_upload = _this.filter_write_data(data.chart_write.filter(function (val) { if (val.type == 'upload') {
                                return val;
                            } }));
                            var Delete_data = _this.filter_write_data(data.chart_write.filter(function (val) { if (val.type == 'Delete') {
                                return val;
                            } }));
                            _this.barch_deletedata[0].data = Delete_data;
                            _this.barChartData[0].data = write_upload;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatuserComponent.prototype.openside = function ($event) {
        this.Menu_nav_hide = !this.Menu_nav_hide;
    };
    ChatuserComponent.prototype.filter_write_data = function (chart_write) {
        var arr = new Array();
        var some = 0;
        var _loop_1 = function (i) {
            chart_write.forEach(function (el) {
                if ((new Date(el.Date)).getDay() == i) {
                    some = el.Taile + some;
                }
            });
            arr.push(some);
            some = 0;
        };
        for (var i = 0; i <= 6; i++) {
            _loop_1(i);
        }
        this.data_write = arr.slice(0, (new Date()).getDay() + 1);
        return arr.slice(0, (new Date()).getDay() + 1);
    };
    ChatuserComponent = __decorate([
        core_1.Component({
            selector: 'app-chatuser',
            templateUrl: './chatuser.component.html',
            styleUrls: ['./chatuser.component.css']
        })
    ], ChatuserComponent);
    return ChatuserComponent;
}());
exports.ChatuserComponent = ChatuserComponent;
