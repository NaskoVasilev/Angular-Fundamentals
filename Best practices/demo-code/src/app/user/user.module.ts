import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListComponent } from './list/list.component';
import { EntityComponent } from './entity/entity.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [ListComponent, EntityComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
