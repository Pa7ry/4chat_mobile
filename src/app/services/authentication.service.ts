import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private firebaseAuth: AngularFireAuth) { }

  public loginWithEmail(email: string, password: string) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public registerWithEmail(email: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  // public getUser() {
  //   return this.firebaseAuth.user.
  // }

  public getStatus() {
    return this.firebaseAuth.auth.onAuthStateChanged(resp => resp);
  }

  public logOut() {
    return this.firebaseAuth.auth.signOut();
  }

  public resetPassword(email: string) {
    return this.firebaseAuth.auth.sendPasswordResetEmail(email);
  }

}
