import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { sahn } from './custom/sahn';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,sahn
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
