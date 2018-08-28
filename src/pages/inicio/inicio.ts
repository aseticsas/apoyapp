import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {DataServiceProvider } from '../../providers/data-service/data-service';
/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage implements OnInit { 

  constructor(public navCtrl: NavController, public navParams: NavParams, private contenido: DataServiceProvider) {
  }
  public data_categorias = [];
  ngOnInit() {
     this.contenido.getColeccion('categorias').subscribe((datosSnapshot) => {
       this.data_categorias = [];
       datosSnapshot.forEach((datoData: any) => {
         this.data_categorias.push({
           id: datoData.payload.doc.id,
           data: datoData.payload.doc.data()
         });
       });
       console.log(this.data_categorias);
     });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
