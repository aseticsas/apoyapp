import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the DonacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-donaciones',
  templateUrl: 'donaciones.html',
})
export class DonacionesPage implements OnInit{
  iddonacion: string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private contenido: DataServiceProvider
            ) {
  }
  public data_donacion;
  ngOnInit() {

    
  }
  ionViewDidLoad() {
    let iddonacion= this.navParams.get('id');
    let idproyecto= this.navParams.get('idp');
    this.data_donacion=this.contenido.getDonacion(iddonacion);
    this.data_donacion.subscribe(b=>console.log(b, b.payload.data()));
    console.log(this.data_donacion,"data_dona");
  }

}
