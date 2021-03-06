import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component'; //test가 추가됐습니다.

@NgModule({
  declarations: [
    AppComponent,
    TestComponent // test가 추가됐습니다.
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
