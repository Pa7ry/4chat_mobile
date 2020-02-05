import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from './../../interfaces/user.interface';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements OnInit {

  user: User;
  params: {};
  friend: {};

  constructor(private _route: ActivatedRoute) {
    this.params = this._route.snapshot.params;

    this.friend = {
      img: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      msg: [
        'Calere virtutem viris dixisset',
        'Feramus, ei laudem sola hac di',
        'Opibus dicant bella terentianus stultorum suscipiantur nosmet ac lib'
      ]
    };
  }

  ngOnInit() {}

}
