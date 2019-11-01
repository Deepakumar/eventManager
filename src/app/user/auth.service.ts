import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  currentUser: IUser;
  loginUser(usrName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: usrName,
      firstName: 'John',
      lastName: 'Papa'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
