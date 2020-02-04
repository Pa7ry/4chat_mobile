import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit, Output } from '@angular/core';
import { PopoverComponent } from './../../components/popover/popover.component';
import { PopoverController } from '@ionic/angular';
import { RouteParamsService } from 'src/app/services/route-params.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  params: {};

  constructor(public popoverCtrl: PopoverController, private _route: ActivatedRoute) { }

  async popSettings(ev: any) {
    const settings = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await settings.present();
  }

  ngOnInit() { }


}
