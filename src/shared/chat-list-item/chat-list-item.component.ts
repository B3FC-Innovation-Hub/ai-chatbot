import { ChatWithBot } from 'src/models/response-models';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-list-item',
  templateUrl: './chat-list-item.component.html',
  styleUrls: ['./chat-list-item.scss'],
})
export class ChatListItemComponent {
  @Input()
  message: ChatWithBot = { response: '' };
}
