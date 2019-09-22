import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoService } from './todo.service';
import { TodoModule } from './todo/todo.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoreModule } from './core/core.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    HomeComponent,
    AboutComponent,
    DetailsComponent,
    ListComponent,
    NotFoundComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TodoModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [TodoService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
