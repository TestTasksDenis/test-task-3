import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hot-dog-item',
  templateUrl: './hot-dog-item.component.html',
  styleUrls: ['./hot-dog-item.component.scss']
})
export class HotDogItemComponent implements OnInit {
  @Input() title: string;
  @Input() desc: string;
  @Input() img: string;

  constructor() { }

  ngOnInit() {
  }

}
