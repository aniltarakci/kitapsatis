import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Urun } from '../models/urun';
import { Uye } from '../models/uye';

@Injectable({
  providedIn: 'root'
})
export class FbServiceService {

  private dbUrun = '/Urunler';
  private dbUye = '/Uyeler';
  uyeRef: AngularFireList<Uye> = null;
  urunRef: AngularFireList<Urun> = null;

  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
  ) {
    this.uyeRef = db.list(this.dbUye);
    this.urunRef = db.list(this.dbUrun);
  }

  OturumAc(mail: string, sifre: string) {
    return this.afAuth.signInWithEmailAndPassword(mail, sifre);
  }

  OturumKapat() {
    return this.afAuth.signOut();
  }

  OturumAcikken() {
    if (localStorage.getItem("user")) {
      return true;
    } else {
      return false;
    }
  }

  OturumKapaliyken() {
    if (localStorage.getItem("user")) {
      return false;
    } else {
      return true;
    }
  }

  UyeOl(uye: Uye) {
    return this.afAuth.createUserWithEmailAndPassword(uye.mail, uye.sifre);
  }

  UyeEkle(uye: Uye) {
    return this.uyeRef.push(uye);
  }

  UyeListele() {
    return this.uyeRef;
  }

  UyeDuzenle(uye: Uye) {
    return this.uyeRef.update(uye.key, uye);
  }

  UyeSil(key: string) {
    return this.uyeRef.remove(key);
  }

  UrunEkle(urun: Urun) {
    urun.resim = urun.resim.replace('\\', '/').replace('\\', '/').split('/').pop();
    return this.urunRef.push(urun);
  }

  UrunListele() {
    return this.urunRef;
  }

  UrunSil(key: string) {
    return this.urunRef.remove(key);
  }
}
