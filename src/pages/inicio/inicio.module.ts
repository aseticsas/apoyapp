import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicioPage } from './inicio';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../app/credentials';
import { AngularFirestore } from 'angularfire2/firestore';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    InicioPage,
  ],
  imports: [
    IonicPageModule.forChild(InicioPage),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    AngularFirestore,
    DataServiceProvider
  ]
})
export class InicioPageModule {}
