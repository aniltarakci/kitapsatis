import { Router } from '@angular/router';
import { FbServiceService } from './services/fbService.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  kullaniciadi:string;
  uid:string;
  title = 'kitapsatis';

  constructor(
    public fbService: FbServiceService,
    public router:Router
  ) { }

  ngOnInit() {
    var user=JSON.parse(localStorage.getItem("user"));
    this.uid=user.uid;
    this.kullaniciadi=user.displayName;
  }

  OturumKapat(){
    this.fbService.OturumKapat().then(d=>{
      localStorage.removeItem("user");
      this.router.navigate(['/girisyap']);
    });
    }
}
