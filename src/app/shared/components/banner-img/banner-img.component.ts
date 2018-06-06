import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-banner-img',
  templateUrl: './banner-img.component.html',
  styleUrls: ['./banner-img.component.scss']
})
export class BannerImgComponent implements OnInit {

  @Input() img: string;

  constructor() { }

  ngOnInit() {}

}
