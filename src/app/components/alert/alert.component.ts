import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  public async presentAlert(header: string, subheader: string, message: string, buttons: any) {
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subheader,
      message: message,
      buttons: buttons
    });

    await alert.present();
  }

  ngOnInit() {}

}
