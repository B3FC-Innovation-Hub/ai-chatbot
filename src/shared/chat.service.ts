import { ChatWithBot } from './../models/response-models';
import { Injectable, OnDestroy } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from 'src/env/environment';
import { Subject, map, takeUntil, firstValueFrom, from } from 'rxjs';
import { GptRequestData } from 'src/models/gpt-constants';

@Injectable({
  providedIn: 'root',
})
export class ChatService implements OnDestroy {
  public text: string = '';
  public showSpinner: boolean = false;
  public readonly conversation = new Subject<ChatWithBot[]>();
  public conversation$ = this.conversation.asObservable();
  private readonly cancellation = new Subject<void>();
  private readonly conversationArray: any = [];

  constructor() {}

  ngOnDestroy(): void {
    this.cancellation.next();
    this.cancellation.complete();
  }

  async invokeChatGPT(data: string) {
    let config = new Configuration({ apiKey: environment.apiKey });
    let openai = new OpenAIApi(config);
    let completionRequest: GptRequestData = {
      model: 'text-davinci-003',
      prompt: data,
      temperature: 0.2,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };
    this.showSpinner = true;

    const openAiRequest = from(openai.createCompletion(completionRequest)).pipe(
      takeUntil(this.cancellation),
      map((res: any) => res.data.choices[0].text)
    );

    try {
      const res = await firstValueFrom(openAiRequest);
      this.conversationArray.push(res);
      this.conversation.next(this.conversationArray);
    } catch (e) {
      console.log(e);
    }
  }
}
