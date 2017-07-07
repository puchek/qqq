import { Component, OnInit} from '@angular/core';
import {Wagon} from '../shared/wagon.model';
import {WagonsService} from './wagons.service';


@Component({
  selector: 'app-wagons',
  templateUrl: './wagons.component.html',
  styleUrls: ['./wagons.component.css']
})
export class WagonsComponent implements OnInit {
  text: string;

  wagons: Wagon[];

  constructor(private wagonService: WagonsService) { }

  ngOnInit() {
    this.wagonService.getWagons().then(wagons => this.wagons = wagons);
  }

}
