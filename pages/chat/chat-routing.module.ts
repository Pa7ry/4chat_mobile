import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './../../components/users/users.component';
import { MessagesComponent } from './../../components/messages/messages.component';

import { ChatPage } from './chat.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPage,
    children: [
      { path: '', component: UsersComponent },
      { path: 'messages/:nick/:uid', component: MessagesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
