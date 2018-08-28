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
}
