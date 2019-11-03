import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubjectDemoComponent } from './subject-demo/subject-demo.component';
//import { UserModule } from './user/user.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'demos/subject',
    component: SubjectDemoComponent,
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule',
    //loadChildren: () => UserModule
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //enableTracing: true,
    //preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],

})
export class AppRoutingModule { }
