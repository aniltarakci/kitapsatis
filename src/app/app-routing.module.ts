import { HesapbilgilerimComponent } from './components/hesapbilgilerim/hesapbilgilerim.component';
import { UrunlisteleComponent } from './components/urunlistele/urunlistele.component';
import { UyeolComponent } from './components/uyeol/uyeol.component';
import { GirisyapComponent } from './components/girisyap/girisyap.component';
import { UyelerComponent } from './components/uyeler/uyeler.component';
import { AdminpaneliComponent } from './components/adminpaneli/adminpaneli.component';
import { SepetimComponent } from './components/sepetim/sepetim.component';
import { SiparislerimComponent } from './components/siparislerim/siparislerim.component';
import { UrunekleComponent } from './components/urunekle/urunekle.component';
import { UrunComponent } from './components/urun/urun.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AskComponent } from './components/ask/ask.component';
import { BilimComponent } from './components/bilim/bilim.component';
import { CocukComponent } from './components/cocuk/cocuk.component';
import { HomeComponent } from './components/home/home.component';
import { KlasikComponent } from './components/klasik/klasik.component';
import { PolisiyeComponent } from './components/polisiye/polisiye.component';
import { PsikolojiComponent } from './components/psikoloji/psikoloji.component';
import { RomanComponent } from './components/roman/roman.component';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard'

const redirectLogin = () => redirectUnauthorizedTo (['girisyap']);
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'ask', component: AskComponent},
  {path: 'bilim', component: BilimComponent},
  {path: 'cocuk', component: CocukComponent},
  {path: 'klasik', component: KlasikComponent},
  {path: 'polisiye', component: PolisiyeComponent},
  {path: 'psikoloji', component: PsikolojiComponent},
  {path: 'roman', component: RomanComponent},
  {path: 'urun', component: UrunComponent},
  {path: 'urunlistele', component: UrunlisteleComponent},
  {path: 'urunekle', component: UrunekleComponent},
  {path: 'siparislerim', component: SiparislerimComponent},
  {path: 'sepetim', component: SepetimComponent},
  {path: 'adminpaneli', component: AdminpaneliComponent, canActivate:[AngularFireAuthGuard], data:{authGuardPipe: redirectLogin}},
  {path: 'uyeler', component: UyelerComponent},
  {path: 'uyeol', component: UyeolComponent},
  {path: 'girisyap', component: GirisyapComponent},
  {path: 'hesapbilgilerim', component: HesapbilgilerimComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
