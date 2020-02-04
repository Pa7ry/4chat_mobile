import { MessagesComponent } from './../../components/messages/messages.component';
import { UsersComponent } from './../../components/users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule
  ],
  declarations: [
    ChatPage,
    UsersComponent,
    MessagesComponent
  ]
})
export class ChatPageModule {}
