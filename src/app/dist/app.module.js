"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.tokenGetter = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./Home/home/home.component");
var login_component_1 = require("./formulaire/login/login.component");
var nav_component_1 = require("./Home/nav/nav.component");
var core_2 = require("@angular/material/core");
var badge_1 = require("@angular/material/badge");
var animations_1 = require("@angular/platform-browser/animations");
var checkbox_1 = require("@angular/material/checkbox");
var button_1 = require("@angular/material/button");
var input_1 = require("@angular/material/input");
var autocomplete_1 = require("@angular/material/autocomplete");
var datepicker_1 = require("@angular/material/datepicker");
var form_field_1 = require("@angular/material/form-field");
var radio_1 = require("@angular/material/radio");
var select_1 = require("@angular/material/select");
var slider_1 = require("@angular/material/slider");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var menu_1 = require("@angular/material/menu");
var sidenav_1 = require("@angular/material/sidenav");
var toolbar_1 = require("@angular/material/toolbar");
var list_1 = require("@angular/material/list");
var grid_list_1 = require("@angular/material/grid-list");
var card_1 = require("@angular/material/card");
var stepper_1 = require("@angular/material/stepper");
var tabs_1 = require("@angular/material/tabs");
var expansion_1 = require("@angular/material/expansion");
var button_toggle_1 = require("@angular/material/button-toggle");
var chips_1 = require("@angular/material/chips");
var icon_1 = require("@angular/material/icon");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var progress_bar_1 = require("@angular/material/progress-bar");
var dialog_1 = require("@angular/material/dialog");
var core_3 = require("@angular/material/core");
var tooltip_1 = require("@angular/material/tooltip");
var snack_bar_1 = require("@angular/material/snack-bar");
var table_1 = require("@angular/material/table");
var sort_1 = require("@angular/material/sort");
var paginator_1 = require("@angular/material/paginator");
var createaccount_component_1 = require("./formulaire/createaccount/createaccount.component");
var angular_responsive_carousel_1 = require("angular-responsive-carousel");
var win_service_1 = require("./Window-mon/win.service");
var auth_service_service_1 = require("./client/auth-service.service");
var http_1 = require("@angular/common/http");
var image_component_1 = require("./user/image/image.component");
var ng_image_slider_1 = require("ng-image-slider");
var nav_home_component_1 = require("./formulaire/nav_home/nav-home/nav-home.component");
var tablogc_component_1 = require("./Home/tabl/tablogc/tablogc.component");
var iterface_view_component_1 = require("./user/iterface-view/iterface-view.component");
var files_component_1 = require("./user/files/files.component");
var nav_files_component_1 = require("./user/files/nav-files/nav-files.component");
var serviceclient_service_1 = require("./client/serviceclient.service");
var datatable_component_1 = require("./tables/datatable/datatable.component");
var create_folder_component_1 = require("./Window-mon/create-folder/create-folder.component");
var files_upload_component_1 = require("./Window-mon/files-upload/files-upload.component");
var ngx_drag_scroll_1 = require("ngx-drag-scroll");
var file_view_component_1 = require("./View_models/file-view/file-view.component");
var image_view_component_1 = require("./View_models/image-view/image-view.component");
var ngx_file_drop_1 = require("ngx-file-drop");
var menu_file_component_1 = require("./Menu/menu-file/menu-file.component");
var share_file_component_1 = require("./Window-mon/share-file/share-file.component");
var link_file_component_1 = require("./Window-mon/link-file/link-file.component");
var clipboard_1 = require("@angular/cdk/clipboard");
var ships_email_component_1 = require("./Window-mon/ships-email/ships-email.component");
var succes_snake_component_1 = require("./Snaks_bar/succes-snake/succes-snake.component");
var faild_snake_component_1 = require("./Snaks_bar/faild-snake/faild-snake.component");
var rename_file_component_1 = require("./Window-mon/rename-file/rename-file.component");
var logout_component_1 = require("./formulaire/logout/logout.component");
var angular_jwt_1 = require("@auth0/angular-jwt");
var homeguard_component_1 = require("./Watch_auth_dog/homeguard/homeguard.component");
var chatuser_component_1 = require("./Charts/chatuser/chatuser.component");
var ng2_charts_1 = require("ng2-charts");
var table_data_component_1 = require("./Access/Views/table-data/table-data.component");
var zipfolder_component_1 = require("./Window-mon/zipfolder/zipfolder.component");
var httpinterceptor_service_1 = require("../app/client/httpinterceptor.service");
var sessionend_component_1 = require("./Erros/sessionend/sessionend.component");
var menufolder_component_1 = require("./Menu/menufolder/menufolder.component");
var folderlinkgen_component_1 = require("./window-mon/folderlinkgen/folderlinkgen.component");
var serviceshare_service_1 = require("../app/Access/serviceshare.service");
var controller_component_1 = require("./Access/controller/controller.component");
var nav_share_component_1 = require("./Access/Views/nav-share/nav-share.component");
var controllerchart_component_1 = require("./Charts/controllerchart/controllerchart.component");
var menuacess_component_1 = require("./Access/Views/menuacess/menuacess.component");
var create_shared_folder_component_1 = require("./Window-mon/shared/create-shared-folder/create-shared-folder.component");
var share_groups_component_1 = require("./Sharedview/Group_controller/share-groups.component");
var publicview_component_1 = require("./Sharedview/groupviews/publicview/publicview.component");
var privateview_component_1 = require("./Sharedview/groupviews/privateview/privateview.component");
var cardgroupview_component_1 = require("./Sharedview/groupviews/cardgroupview/cardgroupview.component");
var menugroup_component_1 = require("./Sharedview/groupviews/menugroup/menugroup.component");
function tokenGetter() {
    console.log(localStorage.getItem("Token"), "ffffffffffff");
    return localStorage.getItem('Token');
}
exports.tokenGetter = tokenGetter;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                nav_component_1.NavComponent,
                createaccount_component_1.CreateaccountComponent,
                image_component_1.ImageComponent,
                nav_home_component_1.NavHomeComponent,
                tablogc_component_1.TablogcComponent,
                iterface_view_component_1.IterfaceViewComponent,
                files_component_1.FilesComponent,
                nav_files_component_1.NavFilesComponent,
                datatable_component_1.DatatableComponent,
                create_folder_component_1.CreateFolderComponent,
                files_upload_component_1.FilesUploadComponent,
                file_view_component_1.FileViewComponent,
                image_view_component_1.ImageViewComponent,
                menu_file_component_1.MenuFileComponent,
                share_file_component_1.ShareFileComponent,
                link_file_component_1.LinkFileComponent,
                ships_email_component_1.ShipsEmailComponent,
                succes_snake_component_1.SuccesSnakeComponent,
                faild_snake_component_1.FaildSnakeComponent,
                rename_file_component_1.RenameFileComponent,
                logout_component_1.LogoutComponent,
                homeguard_component_1.HomeguardComponent,
                chatuser_component_1.ChatuserComponent,
                table_data_component_1.TableDataComponent,
                zipfolder_component_1.ZipfolderComponent,
                sessionend_component_1.SessionendComponent,
                menufolder_component_1.MenufolderComponent,
                folderlinkgen_component_1.FolderlinkgenComponent,
                controller_component_1.ControllerComponent,
                nav_share_component_1.NavShareComponent,
                controllerchart_component_1.ControllerchartComponent,
                menuacess_component_1.MenuacessComponent,
                create_shared_folder_component_1.CreateSharedFolderComponent,
                share_groups_component_1.ShareGroupsComponent,
                publicview_component_1.PublicviewComponent,
                privateview_component_1.PrivateviewComponent,
                cardgroupview_component_1.CardgroupviewComponent,
                menugroup_component_1.MenugroupComponent,
            ],
            imports: [
                angular_jwt_1.JwtModule.forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        allowedDomains: ["localhost:3000"],
                        disallowedRoutes: ["localhost:3000/user/login"]
                    }
                }),
                ng2_charts_1.ChartsModule,
                core_2.MatNativeDateModule,
                clipboard_1.ClipboardModule,
                ngx_file_drop_1.NgxFileDropModule,
                ngx_drag_scroll_1.DragScrollModule,
                ng_image_slider_1.NgImageSliderModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_responsive_carousel_1.IvyCarouselModule,
                core_3.MatRippleModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                checkbox_1.MatCheckboxModule,
                checkbox_1.MatCheckboxModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
                autocomplete_1.MatAutocompleteModule,
                datepicker_1.MatDatepickerModule,
                form_field_1.MatFormFieldModule,
                radio_1.MatRadioModule,
                select_1.MatSelectModule,
                slider_1.MatSliderModule,
                slide_toggle_1.MatSlideToggleModule,
                menu_1.MatMenuModule,
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                list_1.MatListModule,
                grid_list_1.MatGridListModule,
                card_1.MatCardModule,
                stepper_1.MatStepperModule,
                tabs_1.MatTabsModule,
                expansion_1.MatExpansionModule,
                button_toggle_1.MatButtonToggleModule,
                chips_1.MatChipsModule,
                icon_1.MatIconModule,
                progress_spinner_1.MatProgressSpinnerModule,
                progress_bar_1.MatProgressBarModule,
                dialog_1.MatDialogModule,
                tooltip_1.MatTooltipModule,
                snack_bar_1.MatSnackBarModule,
                table_1.MatTableModule,
                sort_1.MatSortModule,
                paginator_1.MatPaginatorModule,
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                router_1.RouterModule,
                badge_1.MatBadgeModule
            ],
            providers: [win_service_1.WinService, auth_service_service_1.AuthServiceService, serviceclient_service_1.ServiceclientService, serviceshare_service_1.ServiceshareService,
                { provide: http_1.HTTP_INTERCEPTORS,
                    useClass: httpinterceptor_service_1.HttpinterceptorService,
                    multi: true
                },
            ],
            bootstrap: [app_component_1.AppComponent], entryComponents: [files_upload_component_1.FilesUploadComponent, share_file_component_1.ShareFileComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
