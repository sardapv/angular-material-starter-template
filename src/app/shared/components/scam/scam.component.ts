import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-scam',
  templateUrl: './scam.component.html',
  styleUrls: ['./scam.component.scss'],
  imports: [MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule],
  standalone: true,
})
export class ScamComponent {
  control = new FormControl();
}
