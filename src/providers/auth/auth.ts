import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { UserServiceProvider } from '../user-service/user-service';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  user: Observable<firebase.User>;
  constructor(private firebaseAuth: AngularFireAuth, private userService: UserServiceProvider) {
    this.user = firebaseAuth.authState;
    console.log(this.user, "auth.ts")
  }
  login(email: string, password: string) 
  {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }
  logout() 
  {
     this.firebaseAuth
       .auth
       .signOut();
  }
}


/*
  signup(email: string, password: string) 
  {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }
  login(email: string, password: string) 
  {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }
  logout() 
  {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
*/