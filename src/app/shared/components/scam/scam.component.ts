import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-scam',
  templateUrl: './scam.component.html',
  styleUrls: ['./scam.component.scss'],
})
export class ScamComponent implements OnInit {
  control = new FormControl();

  constructor() {}

  ngOnInit(): void {}
}
