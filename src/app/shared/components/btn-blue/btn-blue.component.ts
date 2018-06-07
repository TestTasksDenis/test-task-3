import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn-blue',
  templateUrl: './btn-blue.component.html',
  styleUrls: ['./btn-blue.component.scss']
})
export class BtnBlueComponent implements OnInit {

  @Input() btnUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
