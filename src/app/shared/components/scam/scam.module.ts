import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScamComponent } from './scam.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ScamComponent],
  imports: [CommonModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule],
  exports: [ScamComponent],
})
export class SCAMDemoModule {}
