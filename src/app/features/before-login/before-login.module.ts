import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { BeforeLoginComponent } from './before-login.component';


@NgModule({
  declarations: [
    BeforeLoginComponent
  ],
  imports: [
    CommonModule,
    BeforeLoginRoutingModule
  ]
})
export class BeforeLoginModule { }
