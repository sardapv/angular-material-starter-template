import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-scam',
  templateUrl: './scam.component.html',
  styleUrls: ['./scam.component.scss'],
})
export class ScamComponent {
  control = new FormControl();
}
