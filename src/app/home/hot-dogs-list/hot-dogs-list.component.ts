import { Component, OnInit } from '@angular/core';
import { HotDogsService } from '../../shared/services/hot-dogs.service';
import { HotDogsModel } from '../../shared/models/hot-dogs.model';

@Component({
  selector: 'app-hot-dogs-list',
  templateUrl: './hot-dogs-list.component.html',
  styleUrls: ['./hot-dogs-list.component.scss']
})
export class HotDogsListComponent implements OnInit {
  date = new Date();
  hotDogs: HotDogsModel[];

  constructor(private hotDogsService: HotDogsService) {}

  ngOnInit() {
    this.hotDogsService.getHotDogs().subscribe(hotDogs => {
      this.hotDogs = hotDogs.filter(item => {
        return Date.parse(new Date(item.expirationDate).toISOString()) > Date.parse(this.date.toISOString());
      });
    });
  }
}
