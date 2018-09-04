import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from './credentials';
import { AngularFireAuthModule } from 'angularfire2/auth';

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InicioPage } from '../pages/inicio/inicio';
import { CategoriasPage } from '../pages/categorias/categorias';
import { ProyectoPage } from '../pages/proyecto/proyecto';
import { DonacionesPage } from '../pages/donaciones/donaciones';
//services
import { DataServiceProvider } from '../providers/data-service/data-service';
import { AuthProvider } from '../providers/auth/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InicioPage,
    CategoriasPage,
    ProyectoPage,
    DonacionesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InicioPage,
    ProyectoPage,
    CategoriasPage,
    DonacionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataServiceProvider,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  //  
    AngularFirestore,
    UserServiceProvider
  ]
})
export class AppModule {}
