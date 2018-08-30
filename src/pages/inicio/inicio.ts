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
  cat1= {
    nombre : "categoria1",
    icono : "water"
  };
  cat2= {
    nombre : "categoria1",
    icono : "water"
  };
  cat3= {
    nombre : "categoria1",
    icono : "water"
  };
  tab1: any;
  tab2: any;
  tab3: any;
  emails: string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private contenido: DataServiceProvider, 
              private user: UserServiceProvider,
              public authService: AuthProvider) {
                this.tab1 = CategoriasPage;
                this.tab2 = CategoriasPage;
                this.tab3 = CategoriasPage;
  }
  // public cat1 = [
  //   nombre: string;
  // ];
  public data_categorias = [];
  public categoria1= [];
  public categoria2= [];
  public categoria3= [];
  ngOnInit() {
    this.authService.user.subscribe((data)=>{
      this.emails=data.email;
      this.contenido.getCategorias(this.emails).subscribe((categoriasSnapshot)=> {
        this.data_categorias = [];
        categoriasSnapshot.forEach((datoData: any) => {
          this.data_categorias.push({
            id: datoData.payload.doc.id,
            data: datoData.payload.doc.data()
          });
        });
       // console.log(this.data_categorias[0].data.categorias);
        this.contenido.getCategoria(this.data_categorias[0].data.categorias[0]).subscribe((categoria1Snapshot)=>{
          this.categoria1 = [];
          categoria1Snapshot.forEach((datoCat1: any)=>{
            this.categoria1.push({
              id: datoCat1.payload.doc.id,
              data: datoCat1.payload.doc.data()
            });//cierra el push
          })//cierra el foreach
          //console.log(this.categoria1[0].data.ncategoria);
          this.cat1.nombre = this.categoria1[0].data.ncategoria;
          this.cat1.icono = this.categoria1[0].data.icategoria;     
        })//cierra el subscribe
        this.contenido.getCategoria(this.data_categorias[0].data.categorias[1]).subscribe((categoria2Snapshot)=>{
          this.categoria2 = [];
          categoria2Snapshot.forEach((datoCat2: any)=>{
            this.categoria2.push({
              id: datoCat2.payload.doc.id,
              data: datoCat2.payload.doc.data()
            });//cierra el push
          })//cierra el foreach
          //console.log(this.categoria1[0].data.ncategoria);
          this.cat2.nombre = this.categoria2[0].data.ncategoria;
          this.cat2.icono = this.categoria2[0].data.icategoria;     
        })//cierra el subscribe
        this.contenido.getCategoria(this.data_categorias[0].data.categorias[2]).subscribe((categoria3Snapshot)=>{
          this.categoria3 = [];
          categoria3Snapshot.forEach((datoCat3: any)=>{
            this.categoria3.push({
              id: datoCat3.payload.doc.id,
              data: datoCat3.payload.doc.data()
            });//cierra el push
          })//cierra el foreach
          //console.log(this.categoria1[0].data.ncategoria);
          this.cat3.nombre = this.categoria3[0].data.ncategoria;
          this.cat3.icono = this.categoria3[0].data.icategoria;     
        })//cierra el subscribe
      });
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
