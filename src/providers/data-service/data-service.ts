import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(public firestore: AngularFirestore) {  }
  public getColeccion(coleccion: string){
     return this.firestore.collection(coleccion).snapshotChanges();
  }
  public getCategorias(data_email: string){
    return this.firestore.collection('personas')
    .doc('d_benefactores')
    .collection('c_usuarios', email => email.where('email','==',data_email)).snapshotChanges();
  }
  public getCategoria(id:number){
    return this.firestore.collection('categorias', idcategoria => idcategoria.where('idcategoria','==',id)).snapshotChanges()
  }
  public getProyectos(data_categoria: number){
    return this.firestore.collection('proyectos', categoria => categoria.where('categoria1','==',data_categoria)).snapshotChanges();
  }
}
