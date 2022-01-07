import { FbServiceService } from './../../services/fbService.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-urun',
  templateUrl: './urun.component.html',
  styleUrls: ['./urun.component.css']
})
export class UrunComponent implements OnInit {

  id = this.route.snapshot.queryParamMap.get('id');
  urundetay: any;

  constructor(
    private route: ActivatedRoute,
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
      this.urundetay = data.filter(x => x.urunid == this.id)[0];
    });
  }
}
