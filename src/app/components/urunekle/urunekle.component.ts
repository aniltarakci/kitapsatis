import { FbServiceService } from './../../services/fbService.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sonuc } from 'src/app/models/sonuc';
import { Urun } from 'src/app/models/urun';

@Component({
  selector: 'app-urunekle',
  templateUrl: './urunekle.component.html',
  styleUrls: ['./urunekle.component.css']
})
export class UrunekleComponent implements OnInit {
  kullaniciadi: string;
  uid: string;
  urunler: any;
  secUrun: Urun = new Urun();
  sonuc: Sonuc = new Sonuc();

  constructor(
    public fbService: FbServiceService,
    public router: Router
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.kullaniciadi = user.displayName;
    this.secUrun.key = null;
  }

  OturumKapat() {
    this.fbService.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/girisyap']);
    });
  }

  UrunEkle() {
    if (this.secUrun.key == null) {
      this.fbService.UrunEkle(this.secUrun).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "Ürün Eklendi.";
        window.location.reload();
      });
    }
    else {
      this.sonuc.mesaj = "Ürün Eklenemedi!";
    }
  }

}
