import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DanceacademyComponent } from './danceacademy/danceacademy.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddchoreographerComponent } from './addchoreographer/addchoreographer.component';
import { ShowchoreographerComponent } from './showchoreographer/showchoreographer.component';
import { AddComponent } from './add/add.component';
import { ShowbookingsComponent } from './showbookings/showbookings.component';
import { EditchoreographersComponent } from './editchoreographers/editchoreographers.component';
import { AuthUsertypeService } from './auth-usertype.service';
import { AuthenticationService } from './authentication.service';

const routes: Routes = [
  {path : '',redirectTo: '/homepage', pathMatch:'full'},
    {path : 'homepage', component: HomepageComponent},
    {path : 'loginpage', component: LoginpageComponent},
    {path : 'userregistration', component: UserregistrationComponent},
    {path : 'danceacademy', component: DanceacademyComponent,canActivate:[AuthenticationService]},
    { path: 'add', component: AddComponent },
  { path: 'addchoreographer', component: AddchoreographerComponent },
  { path: 'showchoreographer', component: ShowchoreographerComponent},
  { path: 'showbookings', component: ShowbookingsComponent,canActivate:[AuthenticationService]},
  { path: 'edit', component: EditchoreographersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
