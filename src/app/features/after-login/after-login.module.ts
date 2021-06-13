import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterLoginRoutingModule } from './after-login-routing.module';
import { AfterLoginComponent } from './after-login.component';
import { SCAMDemoModule } from '../../shared/components/scam/scam.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AfterLoginComponent],
  imports: [CommonModule, AfterLoginRoutingModule, SharedModule, SCAMDemoModule],
})
export class AfterLoginModule {}
