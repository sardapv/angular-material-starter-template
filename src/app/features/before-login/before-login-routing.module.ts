import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeforeLoginComponent } from './before-login.component';

const routes: Routes = [{ path: '', component: BeforeLoginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeforeLoginRoutingModule {}
