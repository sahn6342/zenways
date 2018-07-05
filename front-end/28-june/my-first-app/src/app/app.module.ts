import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { sahn } from './custom/sahn';
import { FormsModule } from '@angular/forms';
import { first } from "./custom/new-component";
@NgModule({
  declarations: [
    AppComponent,sahn,first
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot([{
      path:"first",
      component:first
    },{
      path:"second",
      component:sahn
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
