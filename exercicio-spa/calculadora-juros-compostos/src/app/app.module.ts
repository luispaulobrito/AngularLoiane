import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { FormatCurrencyPipe } from './format-currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ResultComponent,
    FormatCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
