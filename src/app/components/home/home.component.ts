import { FbServiceService } from './../../services/fbService.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  kategori = "home";
  urunler: any;

  constructor(
    public fbService: FbServiceService,
  ) { }

  ngOnInit() {
    this.UrunListele();
  }

  UrunListele() {
    this.fbService.UrunListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.urunler = data.filter(x => x.kategori == this.kategori);
    });
  }

}
