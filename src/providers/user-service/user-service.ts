import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  private user_data: string;
  constructor() {
  }
  setData (user_data: string) {
    this.user_data = user_data;
    console.log("asdfgsadg",user_data);
  }
  getData(){
    return this.user_data;
  }
}
