import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { LoginComponent } from './formulaire/login/login.component';
import { NavComponent } from './Home/nav/nav.component'
import { MatNativeDateModule } from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CreateaccountComponent } from './formulaire/createaccount/createaccount.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {WinService} from './Window-mon/win.service'
import {AuthServiceService} from './client/auth-service.service'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ImageComponent } from './user/image/image.component'
import {NgImageSliderModule} from 'ng-image-slider'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {NavHomeComponent} from './formulaire/nav_home/nav-home/nav-home.component';
import { TablogcComponent } from './Home/tabl/tablogc/tablogc.component';
import { IterfaceViewComponent } from './user/iterface-view/iterface-view.component';
import { FilesComponent } from './user/files/files.component';
import { NavFilesComponent } from './user/files/nav-files/nav-files.component';
import {ServiceclientService} from './client/serviceclient.service';
import { DatatableComponent } from './tables/datatable/datatable.component';
import { CreateFolderComponent } from './Window-mon/create-folder/create-folder.component';
import { FilesUploadComponent } from './Window-mon/files-upload/files-upload.component'
import{DragScrollModule} from 'ngx-drag-scroll';
import { FileViewComponent } from './View_models/file-view/file-view.component';
import { ImageViewComponent } from './View_models/image-view/image-view.component'
import { NgxFileDropModule } from 'ngx-file-drop';
import { MenuFileComponent } from './Menu/menu-file/menu-file.component';
import { ShareFileComponent } from './Window-mon/share-file/share-file.component';
import { LinkFileComponent } from './Window-mon/link-file/link-file.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ShipsEmailComponent } from './Window-mon/ships-email/ships-email.component';
import { SuccesSnakeComponent } from './Snaks_bar/succes-snake/succes-snake.component';
import { FaildSnakeComponent } from './Snaks_bar/faild-snake/faild-snake.component';
import { RenameFileComponent } from './Window-mon/rename-file/rename-file.component';
import { LogoutComponent } from './formulaire/logout/logout.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HomeguardComponent } from './Watch_auth_dog/homeguard/homeguard.component';
import { ChatuserComponent } from './Charts/chatuser/chatuser.component';
import { ChartsModule } from 'ng2-charts';
import { TableDataComponent } from './Access/Views/table-data/table-data.component';
import { ZipfolderComponent } from './Window-mon/zipfolder/zipfolder.component';
import {HttpinterceptorService} from '../app/client/httpinterceptor.service';
import { SessionendComponent } from './Erros/sessionend/sessionend.component';
import { MenufolderComponent } from './Menu/menufolder/menufolder.component';
import { FolderlinkgenComponent } from './window-mon/folderlinkgen/folderlinkgen.component';
import  {ServiceshareService} from '../app/Access/serviceshare.service';
import { ControllerComponent } from './Access/controller/controller.component';
import { NavShareComponent } from './Access/Views/nav-share/nav-share.component';
import { ControllerchartComponent } from './Charts/controllerchart/controllerchart.component';
import { MenuacessComponent } from './Access/Views/menuacess/menuacess.component';
import { CreateSharedFolderComponent } from './Window-mon/shared/create-shared-folder/create-shared-folder.component';
import { ShareGroupsComponent } from './Sharedview/Group_controller/share-groups.component';
import { PublicviewComponent } from './Sharedview/groupviews/publicview/publicview.component';
import { PrivateviewComponent } from './Sharedview/groupviews/privateview/privateview.component';
import { CardgroupviewComponent } from './Sharedview/groupviews/cardgroupview/cardgroupview.component';
import { MenugroupComponent } from './Sharedview/groupviews/menugroup/menugroup.component';
import { MenupersonComponent } from './Sharedview/groupviews/menuperson/menuperson.component';
import { GroupnameComponent } from './Window-mon/group/groupname/groupname.component';
import { InvitepersonComponent } from './Window-mon/group/inviteperson/inviteperson.component';
import { JoinedgroupComponent } from './Sharedview/groupviews/joinedgroup/joinedgroup.component'
export function tokenGetter() {
  console.log(localStorage.getItem("Token"),"ffffffffffff")

  return localStorage.getItem('Token');
}
 @NgModule({
  declarations: [

    AppComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    CreateaccountComponent,
    ImageComponent,
    NavHomeComponent,
    TablogcComponent,
    IterfaceViewComponent,
    FilesComponent,
    NavFilesComponent,
    DatatableComponent,
    CreateFolderComponent,
    FilesUploadComponent,
    FileViewComponent,
    ImageViewComponent,
    MenuFileComponent,
    ShareFileComponent,
    LinkFileComponent,
    ShipsEmailComponent,
    SuccesSnakeComponent,
    FaildSnakeComponent,
    RenameFileComponent,
    LogoutComponent,
    HomeguardComponent,
    ChatuserComponent,
    TableDataComponent,
    ZipfolderComponent,
    SessionendComponent,
    MenufolderComponent,
    FolderlinkgenComponent,
    ControllerComponent,
    NavShareComponent,
    ControllerchartComponent,
    MenuacessComponent,
    CreateSharedFolderComponent,
    ShareGroupsComponent,
    PublicviewComponent,
    PrivateviewComponent,
    CardgroupviewComponent,
    MenugroupComponent,
    MenupersonComponent,
    GroupnameComponent,
    InvitepersonComponent,
    JoinedgroupComponent,

  ],

   imports: [
    JwtModule.forRoot({
config:{

  tokenGetter: tokenGetter,
      allowedDomains:["localhost:3000"],
  disallowedRoutes:["localhost:3000/user/login"]
    }
    }),

    ChartsModule,
    MatNativeDateModule,
    ClipboardModule,
    NgxFileDropModule,
    DragScrollModule,
    NgImageSliderModule,
    FormsModule,
    HttpClientModule,
    IvyCarouselModule,
    MatRippleModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatBadgeModule
  ],
  providers: [WinService,AuthServiceService,ServiceclientService,ServiceshareService,
   {provide:HTTP_INTERCEPTORS,
   useClass:HttpinterceptorService,
   multi:true
   },
  ],
  bootstrap: [AppComponent],entryComponents:[FilesUploadComponent,ShareFileComponent]
})


export class AppModule { }

