import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { GoogleMaps } from "@ionic-native/google-maps";

/**
 * Generated class for the EspeciePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-especie',
  templateUrl: 'especie.html',
})
export class EspeciePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EspeciePage');
  }

}
