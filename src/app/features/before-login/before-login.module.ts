import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { BeforeLoginComponent } from './before-login.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [BeforeLoginComponent],
  imports: [CommonModule, BeforeLoginRoutingModule, SharedModule],
})
export class BeforeLoginModule {}
