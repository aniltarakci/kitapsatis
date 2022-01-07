import { Component, OnInit } from '@angular/core';
import { FbServiceService } from './../../services/fbService.service';
import { Router } from '@angular/router';
import { Sonuc } from './../../models/sonuc';
import { Uye } from './../../models/uye';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-uyeler',
  templateUrl: './uyeler.component.html',
  styleUrls: ['./uyeler.component.css']
})
export class UyelerComponent implements OnInit {

  kullaniciadi:string;
  uid:string;
  uyeler:any;
  secUye:Uye= new Uye();
  sonuc: Sonuc = new Sonuc();
  constructor(
    public fbService:FbServiceService,
    public router:Router,
  ) { }

  ngOnInit() {
    this.UyeListele();
    var user=JSON.parse(localStorage.getItem("user"));
    this.uid=user.uid;
    this.kullaniciadi=user.displayName;
  }

  UyeListele(){
    this.fbService.UyeListele().snapshotChanges().pipe(
      map(changes =>
      changes.map(c =>
      ({ key: c.payload.key, ...c.payload.val() })
      )
      )
      ).subscribe(data => {
      this.uyeler = data;
      });
  }

  UyeSil(uye: Uye){
    this.fbService.UyeSil(uye.key).then(()=>{
      this.sonuc.islem = true;
      this.sonuc.mesaj = "Üye Başarıyla Silindi.";
      window.location.reload();
    });
  }

  OturumKapat(){
    this.fbService.OturumKapat().then(d=>{
      localStorage.removeItem("user");
      this.router.navigate(['/girisyap']);
    });
    }
}
