import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './home/game.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
