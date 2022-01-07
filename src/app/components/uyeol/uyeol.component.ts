import { Uye } from './../../models/uye';
import { Router } from '@angular/router';
import { FbServiceService } from './../../services/fbService.service';
import { Sonuc } from './../../models/sonuc';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-uyeol',
  templateUrl: './uyeol.component.html',
  styleUrls: ['./uyeol.component.css']
})
export class UyeolComponent implements OnInit {

  uyeol: any;
  secUye: Uye = new Uye();
  sonuc: Sonuc = new Sonuc();
  constructor(
    public fbService: FbServiceService,
    public router: Router
  ) { }

  ngOnInit() {
    this.secUye.key = null;
  }

  UyeOl() {
    this.fbService.UyeOl(this.secUye).then(d => {
      d.user.updateProfile({
        displayName: this.secUye.kullaniciadi
      }).then();

      this.secUye.uid = d.user.uid;
      localStorage.setItem("user", JSON.stringify(d.user));
      this.UyeEkle();

    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "Hata Oluştu, Tekrar Deneyiniz!";
    });
  }

  UyeEkle() {
    this.fbService.UyeEkle(this.secUye).then(d => {
      this.router.navigate(['/']).then(() => { window.location.reload() });
    });
  }


}