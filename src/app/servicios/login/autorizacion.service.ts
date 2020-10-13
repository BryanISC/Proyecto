import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable()
export class AutorizacionService {
  public user: User;

  constructor(public afAuth: AngularFireAuth) {}

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async logout(){
    try {
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

}