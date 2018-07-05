import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { login } from './newComponentLogin';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { SignupComponent } from './signup.component';
@NgModule({
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild([{
      path:"",
      component:login
    },{
      path:"signup",
      component:SignupComponent
    }])
  ],
  declarations: [login,SignupComponent]
})
export class LoginModule { 
  @ViewChild('loginForm')form;
}
