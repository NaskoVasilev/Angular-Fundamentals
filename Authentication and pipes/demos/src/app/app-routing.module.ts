import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';


const routes: Routes = [
  {
    path: 'pipe/demo',
    component: PipeDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
