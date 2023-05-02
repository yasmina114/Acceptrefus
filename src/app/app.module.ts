import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccepterDemandeReservationComponent } from './accepter-demande-reservation/accepter-demande-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccepterDemandeReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
