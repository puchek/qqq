import {Component, Input, OnInit} from '@angular/core';
import {Depot} from '../../../shared/depot.model';

@Component({
  selector: 'app-depot-item',
  templateUrl: './depot-item.component.html',
  styleUrls: ['./depot-item.component.css']
})
export class DepotItemComponent implements OnInit {
  @Input() depot: Depot;

  constructor() { }

  ngOnInit() {
  }

}
