import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { FormControl, Validators } from '@angular/forms';
import { ChatWithBot } from 'src/models/response-models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss'],
})
export class ChatContainerComponent implements OnInit {
  showSpinner: boolean = false;
  chatContent = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);
  chat$: Observable<ChatWithBot[]>;

  constructor(protected chatService: ChatService) {
    this.showSpinner = this.chatService.showSpinner;
    this.chat$ = this.chatService.conversation$;
  }

  ngOnInit(): void {}

  submit(value: string | null) {
    console.log(value);
    if (value) {
      this.chatService.invokeChatGPT(value);
    }
  }
}
