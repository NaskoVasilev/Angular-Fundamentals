import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventLiveComponent } from './components/events/event-live/event-live.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'login', component: LoginComponent },
  // {
  //   path: 'event', children: [
  //     { path: ':id/live', component: EventLiveComponent }
  //   ]
  // },
  // {
  //   path: 'user' ,children: [
  //     { path: '', component: UserTabComponent },
  //     { path: 'create', component: EventCreateComponent },
  //     { path: 'list', component: EventListComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
