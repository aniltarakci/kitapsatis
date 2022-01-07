import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbServiceService } from './../../services/fbService.service';
import { map } from 'rxjs/operators'
import { Uye } from './../../models/uye';
import { Sonuc } from 'src/app/models/sonuc';

@Component({
  selector: 'app-hesapbilgilerim',
  templateUrl: './hesapbilgilerim.component.html',
  styleUrls: ['./hesapbilgilerim.component.css']
})
export class HesapbilgilerimComponent implements OnInit {

  uyeler: any;
  uye: any;
  uid: string;
  kullaniciadi: string;
  secUye: Uye = new Uye();
  sonuc: Sonuc = new Sonuc();
  id = this.route.snapshot.queryParamMap.get('id');
  constructor(
    public fbService: FbServiceService,
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.kullaniciadi = user.displayName;
    this.UyeListele();
    this.secUye.key = null;
  }

  UyeListele() {
    this.fbService.UyeListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.uyeler = data;/*.filter(x => x.uid == this.uid)[0];*/
    });
  }

  Kaydet() {
    if (this.secUye.key == null) {
      this.fbService.UyeEkle(this.secUye).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "üye eklendi";
      });
    }
    else {
      this.fbService.UyeDuzenle(this.secUye).then(() => {
        this.sonuc.islem = true;
        this.sonuc.mesaj = "üye düzenlendi";
      });
    }
  }

  UyeDuzenle(uye: Uye) {
    Object.assign(this.secUye, uye);
  }
}