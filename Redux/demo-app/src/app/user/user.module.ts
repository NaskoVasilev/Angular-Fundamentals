import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { UserRoutingModule } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature('user', reducers),
  ]
})
export class UserModule { }
