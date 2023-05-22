import { ChatListItemModule } from '../chat-list-item/chat-list-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatContainerComponent } from './chat-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/components/components.module';

@NgModule({
  declarations: [ChatContainerComponent],
  imports: [
    CommonModule,
    ChatListItemModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  exports: [ChatContainerComponent],
})
export class ChatContainerModule {}
