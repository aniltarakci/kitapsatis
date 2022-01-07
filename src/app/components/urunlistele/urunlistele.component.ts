import { FbServiceService } from './../../services/fbService.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Urun } from 'src/app/models/urun';
import { map } from 'rxjs/operators';
import { Sonuc } from 'src/app/models/sonuc';

@Component({
  selector: 'app-urunlistele',
  templateUrl: './urunlistele.component.html',
  styleUrls: ['./urunlistele.component.css']
})
export class UrunlisteleComponent implements OnInit {

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
    this.UrunListele();
  }

  OturumKapat() {
    this.fbService.OturumKapat().then(d => {
      localStorage.removeItem("user");
      this.router.navigate(['/girisyap']);
    });
  }

  UrunListele() {
    this.fbService.UrunListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.urunler = data;
    });
  }

  UrunSil(urun: Urun){
    this.fbService.UrunSil(urun.key).then(()=>{
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Ürün Başarıyla Silindi.";
      window.location.reload();
    });
  }
}
