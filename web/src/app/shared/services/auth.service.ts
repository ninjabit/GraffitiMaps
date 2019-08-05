import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }


  logout(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      Meteor.logout((e: Error) => {
        if (e) {
          return reject(e);
        }

        resolve();
      });
    });
  }

  signin(credentials: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      Meteor.loginWithPassword(credentials.email, credentials.password, (e: any) => {
        if (e) {
          return reject(e);
        }
        resolve();
      });
    });
  }

  signup(credentials: any): Promise<void> {
    return new Promise<void>((resolve, reject) => {

      Accounts.createUser(credentials, (e: any) => {
        if (e) {
          return reject(e);
        }

        resolve();
      });
    });
  }
}
