import { HesapbilgilerimComponent } from './components/hesapbilgilerim/hesapbilgilerim.component';
import { UrunlisteleComponent } from './components/urunlistele/urunlistele.component';
import { GirisyapComponent } from './components/girisyap/girisyap.component';
import { UyeolComponent } from './components/uyeol/uyeol.component';
import { UyelerComponent } from './components/uyeler/uyeler.component';
import { AdminpaneliComponent } from './components/adminpaneli/adminpaneli.component';
import { SepetimComponent } from './components/sepetim/sepetim.component';
import { SiparislerimComponent } from './components/siparislerim/siparislerim.component';
import { UrunComponent } from './components/urun/urun.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AskComponent } from './components/ask/ask.component';
import { BilimComponent } from './components/bilim/bilim.component';
import { CocukComponent } from './components/cocuk/cocuk.component';
import { KlasikComponent } from './components/klasik/klasik.component';
import { PolisiyeComponent } from './components/polisiye/polisiye.component';
import { PsikolojiComponent } from './components/psikoloji/psikoloji.component';
import { RomanComponent } from './components/roman/roman.component';
import { UrunekleComponent } from './components/urunekle/urunekle.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AskComponent,
    BilimComponent,
    CocukComponent,
    KlasikComponent,
    PolisiyeComponent,
    PsikolojiComponent,
    RomanComponent,
    UrunComponent,
    UrunlisteleComponent,
    UrunekleComponent,
    SiparislerimComponent,
    SepetimComponent,
    AdminpaneliComponent,
    UyelerComponent,
    UyeolComponent,
    GirisyapComponent,
    HesapbilgilerimComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
