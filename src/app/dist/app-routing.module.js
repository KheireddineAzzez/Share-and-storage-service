"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./Home/home/home.component");
var login_guard_guard_1 = require("./Watch_auth_dog/login-guard.guard");
var iterface_view_component_1 = require("./user/iterface-view/iterface-view.component");
var files_component_1 = require("./user/files/files.component");
var logout_component_1 = require("./formulaire/logout/logout.component");
var homewatch_guard_1 = require("./Watch_auth_dog/homewatch.guard");
var chatuser_component_1 = require("./Charts/chatuser/chatuser.component");
var controller_component_1 = require("./Access/controller/controller.component");
var sessionend_component_1 = require("./Erros/sessionend/sessionend.component");
var share_groups_component_1 = require("./Sharedview/Group_controller/share-groups.component");
var routes = [{ path: 'home', component: home_component_1.HomeComponent, canActivate: [homewatch_guard_1.HomewatchGuard] },
    { path: 'sharepoint/:id', component: controller_component_1.ControllerComponent },
    { path: 'Error401', component: sessionend_component_1.SessionendComponent },
    { path: 'Userprofile', component: iterface_view_component_1.IterfaceViewComponent, canActivate: [login_guard_guard_1.LoginGuardGuard], children: [
            { path: 'Files/:id', component: files_component_1.FilesComponent }, { path: 'logout', component: logout_component_1.LogoutComponent }, { path: 'Charts', component: chatuser_component_1.ChatuserComponent },
            { path: 'groups', component: share_groups_component_1.ShareGroupsComponent }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
