import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  constructor(private authentication: AuthenticationService) { }

  public logOut() {
    return this.authentication.logOut();
  }

  ngOnInit() {}

}
