import { ChatContainerModule } from './../shared/chat-container/chat-container.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ChatContainerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
