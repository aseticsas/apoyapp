import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the ProyectoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-proyecto',
  templateUrl: 'proyecto.html',
})
export class ProyectoPage implements OnInit {
  a: string;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private contenido: DataServiceProvider
            ) {
  }
  public data_proyecto;
  ngOnInit() {

    
  }
  ionViewDidLoad() {
    let a = this.navParams.get('id');
    //console.log(a, 'ionViewDidLoad ProyectoPage');
    this.data_proyecto = this.contenido.getProyecto(a);
    this.data_proyecto.subscribe(b=>console.log(b, b.payload.data()))
    console.log(this.data_proyecto, "proy.ts")
      // this.data_proyecto = proyectosSnapshot.payload.data();
      // console.log(this.data_proyecto);
      // });
  }

}
