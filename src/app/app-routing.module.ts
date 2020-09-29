import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { CreateaccountComponent } from './formulaire/createaccount/createaccount.component';
import {LoginGuardGuard} from './Watch_auth_dog/login-guard.guard'
import { ImageComponent } from './user/image/image.component';
import { IterfaceViewComponent } from './user/iterface-view/iterface-view.component';
import { FilesComponent } from './user/files/files.component';
import { DatatableComponent } from './tables/datatable/datatable.component';
import { LogoutComponent } from './formulaire/logout/logout.component';
import { HomewatchGuard  } from './Watch_auth_dog/homewatch.guard'
import { ChatuserComponent } from './Charts/chatuser/chatuser.component';
import { ControllerComponent } from './Access/controller/controller.component';
import { SessionendComponent } from './Erros/sessionend/sessionend.component';
import { ShareGroupsComponent } from './Sharedview/Group_controller/share-groups.component';
const routes: Routes = [{path:'home',component:HomeComponent,canActivate:[HomewatchGuard]}
,{path:'sharepoint/:id',component:ControllerComponent},
 {path:'Error401',component:SessionendComponent},
{path:'Userprofile',component:IterfaceViewComponent,canActivate:[LoginGuardGuard],children:[

  {path:'Files/:id',component:FilesComponent},{path:'logout',component:LogoutComponent},{path:'Charts',component:ChatuserComponent},
{path:'groups',component:ShareGroupsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
