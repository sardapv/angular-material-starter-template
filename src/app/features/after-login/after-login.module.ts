import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterLoginRoutingModule } from './after-login-routing.module';
import { AfterLoginComponent } from './after-login.component';
import { SCAMDemoModule } from '../../shared/components/scam/scam.module';

@NgModule({
  declarations: [AfterLoginComponent],
  imports: [CommonModule, AfterLoginRoutingModule, SCAMDemoModule],
})
export class AfterLoginModule {}
