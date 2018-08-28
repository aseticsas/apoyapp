import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public authService: AuthProvider) {  }
    login() {
      this.authService.login(this.email, this.password);
      this.email = this.password = '';    
    }
    goToOtherPage()
    {
    this.navCtrl.push(InicioPage);
    }
  ngOnInit(){
  }
}
