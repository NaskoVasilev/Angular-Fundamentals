import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { SidebarListComponent } from './components/shared/sidebar-list/sidebar-list.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { EventLiveComponent } from './components/events/event-live/event-live.component';
import { EventPostQuestionComponent } from './components/events/event-post-question/event-post-question.component';
import { EventQuestionInfoComponent } from './components/events/event-question-info/event-question-info.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { CreateEventComponent } from './user/create-event/create-event.component';
import { EventListComponent } from './user/event-list/event-list.component';
import { UserTabComponent } from './user/user-tab/user-tab.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SidebarListComponent,
    EventLiveComponent,
    EventPostQuestionComponent,
    EventQuestionInfoComponent,
    CreateEventComponent,
    EventListComponent,
    UserTabComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

