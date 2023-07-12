import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { BotaoComponent } from './botao/botao.component';
import { BackgroundComponent } from './background/background.component';
import { ListaComponent } from './lista/lista.component';
import { ParagrafoDinamicoComponent } from './paragrafo-dinamico/paragrafo-dinamico.component';
import { DiretivaNgifParagrafoComponent } from './diretiva-ngif-paragrafo/diretiva-ngif-paragrafo.component';

@NgModule({
  declarations: [
    AppComponent,
    BoasVindasComponent,
    BotaoComponent,
    BackgroundComponent,
    ListaComponent,
    ParagrafoDinamicoComponent,
    DiretivaNgifParagrafoComponent
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
