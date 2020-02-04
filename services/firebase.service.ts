import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from './../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireDatabase: AngularFireDatabase) { }

  public getUsers() {
    return this.fireDatabase.list('/users');
  }

  public getUserById(uid: string) {
    return this.fireDatabase.object(`/users/${uid}`);
  }

  public createUser(user: User) {
    return this.fireDatabase.object(`/users/${user.uid}`).set(user);
  }

  public editUser(user: User) {
    return this.fireDatabase.object(`/users/${user.uid}`).set(user);
  }

}
