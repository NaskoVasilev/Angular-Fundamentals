import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenRegisterFormComponent } from './template-driven-register-form/template-driven-register-form.component';
import { ReactiveRegisterFormComponent } from './reactive-register-form/reactive-register-form.component';
import { ImageUrlValidatorDirective } from './image-url-validator.directive';
import { ImageValidatorDirective } from './image-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenRegisterFormComponent,
    ReactiveRegisterFormComponent,
    ImageUrlValidatorDirective,
    ImageValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
