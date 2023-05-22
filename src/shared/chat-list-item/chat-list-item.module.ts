import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListItemComponent } from './chat-list-item.component';

@NgModule({
  declarations: [ChatListItemComponent],
  exports: [ChatListItemComponent],
  imports: [CommonModule],
})
export class ChatListItemModule {}
