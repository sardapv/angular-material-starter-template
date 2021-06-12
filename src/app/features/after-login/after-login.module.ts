import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterLoginRoutingModule } from './after-login-routing.module';
import { AfterLoginComponent } from './after-login.component';


@NgModule({
  declarations: [
    AfterLoginComponent
  ],
  imports: [
    CommonModule,
    AfterLoginRoutingModule
  ]
})
export class AfterLoginModule { }
