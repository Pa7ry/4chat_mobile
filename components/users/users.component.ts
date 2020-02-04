import { User } from './../../interfaces/user.interface';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  user: any;
  users: User[];
  online = true;

  constructor(private firebase: FirebaseService) {
    this.user = this.firebase.getUsers().valueChanges().subscribe(
      (data: User[]) => {
        console.log(data);
        this.users = data;
      },
      (error) => console.error(error)
    );
   }



  ngOnInit() {}

}
