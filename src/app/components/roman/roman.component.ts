import { Component, OnInit } from '@angular/core';
import { FbServiceService } from './../../services/fbService.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-roman',
  templateUrl: './roman.component.html',
  styleUrls: ['./roman.component.css']
})
export class RomanComponent implements OnInit {
  kategori = "roman";
  sayfabasligi = "ROMAN KİTAPLARI";
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
