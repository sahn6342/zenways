import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashB } from './newComponentDash';
import { RouterModule } from "@angular/router";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:"",
      component:dashB
      
    }])
  ],
  declarations: [dashB]
})
export class DashboardModule { }
