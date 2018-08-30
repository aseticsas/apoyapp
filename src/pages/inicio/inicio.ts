import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {DataServiceProvider } from '../../providers/data-service/data-service';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { AuthProvider } from '../../providers/auth/auth';
import { CategoriasPage } from '../categorias/categorias';

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
  tab1: any;
  tab2: any;
  tab3: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private contenido: DataServiceProvider, 
              private user: UserServiceProvider,
              public authService: AuthProvider) {
                this.tab1 = CategoriasPage;
                this.tab2 = CategoriasPage;
                this.tab3 = CategoriasPage;
  }
 
  public data_categorias = [];
  ngOnInit() {
    this.contenido.getCategorias('jalexandrasf@gmail.com').subscribe((categoriasSnapshot)=> {
      this.data_categorias = [];
      categoriasSnapshot.forEach((datoData: any) => {
        this.data_categorias.push({
          id: datoData.payload.doc.id,
          data: datoData.payload.doc.data()
        });
      });
      console.log(this.data_categorias);
    });
    //console.log("hola",this.data_categorias['data'].categorias[1]);
    //  this.contenido.getColeccion('categorias').subscribe((datosSnapshot) => {
    //    this.data_categorias = [];
    //    datosSnapshot.forEach((datoData: any) => {
    //      this.data_categorias.push({
    //        id: datoData.payload.doc.id,
    //        data: datoData.payload.doc.data()
    //      });
    //    });
    //  });
    //  console.log(this.data_categorias);
    //  console.log(this.user.getData());
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

}
