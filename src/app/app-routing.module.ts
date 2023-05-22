import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BerandaComponent} from "./beranda/beranda.component";
import {TestimoniComponent} from "./testimoni/testimoni.component";
import {HubungiKamiComponent} from "./hubungi-kami/hubungi-kami.component";
import {CaraPemesananComponent} from "./cara-pemesanan/cara-pemesanan.component";
import {ProsesPengerjaanComponent} from "./proses-pengerjaan/proses-pengerjaan.component";
import {SemuaMenuComponent} from "./semua-menu/semua-menu.component";

const routes: Routes = [
  {
    path: '',
    component: BerandaComponent
  },
  {
    path: 'testimoni',
    component: TestimoniComponent,
  },
  {
    path: 'hubungi-kami',
    component: HubungiKamiComponent,
  },
  {
    path: 'cara-pemesanan',
    component: CaraPemesananComponent,
  },
  {
    path: 'proses-pengerjaan',
    component: ProsesPengerjaanComponent,
  },
  {
    path: 'semua-menu',
    component: SemuaMenuComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
