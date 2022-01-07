import { FbServiceService } from './../../services/fbService.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpaneli',
  templateUrl: './adminpaneli.component.html',
  styleUrls: ['./adminpaneli.component.css']
})
export class AdminpaneliComponent implements OnInit {

  kullaniciadi:string;
  uid:string;

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
