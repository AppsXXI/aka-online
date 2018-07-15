import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule, ClrFormsNextModule } from "@clr/angular";

import { AppComponent } from './app.component';
import { AkaNavigationComponent } from './commons/components/aka-navigation/aka-navigation.component';
import { AkaLoginComponent } from './commons/components/aka-login/aka-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AkaNavigationComponent,
    AkaLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ClarityModule,
    ClrFormsNextModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
