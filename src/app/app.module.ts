import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeVoitureComponent } from './mon_projet/liste-voiture/liste-voiture.component';
import { VoitureComponent } from './mon_projet/voiture/voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeVoitureComponent,
    VoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
