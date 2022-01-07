import { FbServiceService } from './../../services/fbService.service';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sonuc } from 'src/app/models/sonuc';

@Component({
  selector: 'app-girisyap',
  templateUrl: './girisyap.component.html',
  styleUrls: ['./girisyap.component.css']
})
export class GirisyapComponent implements OnInit {
  sonuc: Sonuc = new Sonuc();
  constructor(
    public fbService: FbServiceService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  GirisYap(mail: string, sifre: string) {
    this.fbService.OturumAc(mail, sifre).then(d => {
      localStorage.setItem("user", JSON.stringify(d.user));
      this.router.navigate(['/']).then(() => { window.location.reload(); });
    }, err => {
      this.sonuc.islem = false;
      this.sonuc.mesaj = "E-Posta veya Şifre yanlış!";
    });
  }
}
