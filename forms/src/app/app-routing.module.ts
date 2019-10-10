import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveRegisterFormComponent } from './reactive-register-form/reactive-register-form.component';
import { TemplateDrivenRegisterFormComponent } from './template-driven-register-form/template-driven-register-form.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'form/template-driven/register'
  },
  {
    path: 'form/reactive/register',
    component: ReactiveRegisterFormComponent
  },
  {
    path: 'form/template-driven/register',
    component: TemplateDrivenRegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
