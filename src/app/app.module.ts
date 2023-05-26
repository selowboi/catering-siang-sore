import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BerandaComponent} from "./beranda/beranda.component";
import { SemuaMenuComponent } from './semua-menu/semua-menu.component';
import { CaraPemesananComponent } from './cara-pemesanan/cara-pemesanan.component';
import { ProsesPengerjaanComponent } from './proses-pengerjaan/proses-pengerjaan.component';
import { TestimoniComponent } from './testimoni/testimoni.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    BerandaComponent,
    SemuaMenuComponent,
    CaraPemesananComponent,
    ProsesPengerjaanComponent,
    TestimoniComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
