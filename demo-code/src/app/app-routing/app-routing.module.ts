import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { TodoResolver } from '../home/todo.resolver';
import { HomeActivtor } from '../home/home.activator';
import { HomeDeactivtor } from '../home/home-deactivator';
import { DetailsComponent } from '../details/details.component';
import { ListComponent } from '../list/list.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { OneComponent } from '../one/one.component';
import { TwoComponent } from '../two/two.component';
import { AppComponent } from '../app.component';
import { DirectiveDemoComponent } from '../directive-demo/directive-demo.component';
import { LoginComponent } from "../login/LoginComponent";
import { RegisterComponent } from '../register/register.component';
import { AddLaptopComponent } from '../add-laptop/add-laptop.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: [TodoResolver],
    canActivate: [HomeActivtor],
    canDeactivate: [HomeDeactivtor],
  },
  {
    path: 'directive/demo',
    component: DirectiveDemoComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'one'
      },
      {
        path: 'one',
        component: OneComponent,
        outlet: 'about'
      },
      {
        path: 'two',
        component: TwoComponent,
        outlet: 'about'
      }
    ]
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'laptop/add',
    component: AddLaptopComponent
  },
  {
    path: 'todo',
    children: [
      {
        path: 'list',
        component: ListComponent,
        resolve: [TodoResolver]
      },
      {
        path: 'details/:id',
        component: DetailsComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

