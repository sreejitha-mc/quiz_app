import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OptionSelectionComponent } from './option-selection/option-selection.component';
import { TypeTwoQuestionsComponent } from './type-two-questions/type-two-questions.component';
import { TypeOneQuestionsComponent } from './type-one-questions/type-one-questions.component';
import { StatusComponent } from './status/status.component';
import { MenuOfQuestionsComponent } from './menu-of-questions/menu-of-questions.component';
import { TypeOneResultComponent } from './type-one-result/type-one-result.component';
import { TypeTwoResultComponent } from './type-two-result/type-two-result.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OptionSelectionComponent,
    TypeTwoQuestionsComponent,
    TypeOneQuestionsComponent,
    StatusComponent,
    MenuOfQuestionsComponent,
    TypeOneResultComponent,
    TypeTwoResultComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    MenuOfQuestionsComponent
  ],
  entryComponents: [
    MenuOfQuestionsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
