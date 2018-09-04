import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider } from '../../providers/data-service/data-service';
import { ProyectoPage } from '../proyecto/proyecto';
/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage implements OnInit {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private contenido: DataServiceProvider
            ) {
  }

  public proyectos_categoria1=[];
  public proyectos_categoria2=[];
  public proyectos_categoria3=[];
  public categoriaid: number;
  public datos_categoria=[];
  ngOnInit() {

    this.categoriaid=3;

    this.contenido.getProyectos(this.categoriaid,'categoria1').subscribe((proyectosSnapShot)=>{
      this.proyectos_categoria1=[];
      proyectosSnapShot.forEach((proyectoData:any)=>{
        this.proyectos_categoria1.push({
          id: proyectoData.payload.doc.id,
          data: proyectoData.payload.doc.data()
        });//cierra el push
      });//cierra foreach 
    });// cierra subscribe

    this.contenido.getProyectos2(this.categoriaid,'categoria2').subscribe((proyectos2SnapShot)=>{
      this.proyectos_categoria2=[];
      proyectos2SnapShot.forEach((proyecto2Data:any)=>{
        this.proyectos_categoria2.push({
          id: proyecto2Data.payload.doc.id,
          data: proyecto2Data.payload.doc.data()
        });//cierra el push
      });//cierra foreach 
      //console.log(this.proyectos_categoria1);
    });// cierra subscribe
    this.contenido.getProyectos3(this.categoriaid,'categoria3').subscribe((proyectos3SnapShot)=>{
      this.proyectos_categoria3=[];
      proyectos3SnapShot.forEach((proyecto3Data:any)=>{
        this.proyectos_categoria3.push({
          id: proyecto3Data.payload.doc.id,
          data: proyecto3Data.payload.doc.data()
        });//cierra el push
      });//cierra foreach 
      //console.log(this.proyectos_categoria1);
    });// cierra subscribe
    this.contenido.getCategoria(this.categoriaid).subscribe((categoriaSnapShot)=>{
      this.datos_categoria=[];
      categoriaSnapShot.forEach((categoriaData:any)=>{
        this.datos_categoria.push({
          id: categoriaData.payload.doc.id,
          data: categoriaData.payload.doc.data()
        });//cierra el push
      });//cierra foreach 
      console.log(this.proyectos_categoria2);
    });// cierra subscribe

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  goToCategory(id){
    this.navCtrl.push(ProyectoPage, {id: id});
  }
}
