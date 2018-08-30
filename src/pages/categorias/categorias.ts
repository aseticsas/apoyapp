import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataServiceProvider } from '../../providers/data-service/data-service';

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
  public categoriaid: number;
  public datos_categoria=[];
  ngOnInit() {

    this.categoriaid=3;

    this.contenido.getProyectos(this.categoriaid).subscribe((proyectosSnapShot)=>{
      this.proyectos_categoria1=[];
      proyectosSnapShot.forEach((proyectoData:any)=>{
        this.proyectos_categoria1.push({
          id: proyectoData.payload.doc.id,
          data: proyectoData.payload.doc.data()
        });//cierra el push
      });//cierra foreach 
      console.log(this.proyectos_categoria1);
    });// cierra subscribe

    this.contenido.getCategoria(this.categoriaid).subscribe((categoriaSnapShot)=>{
      this.datos_categoria=[];
      categoriaSnapShot.forEach((categoriaData:any)=>{
        this.datos_categoria.push({
          id: categoriaData.payload.doc.id,
          data: categoriaData.payload.doc.data()
        });//cierra el push
      });//cierra foreach 
      console.log(this.datos_categoria);
    });// cierra subscribe

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

}
