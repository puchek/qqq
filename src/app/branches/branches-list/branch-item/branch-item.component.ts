import {Component, Input, OnInit} from '@angular/core';
import {Branch} from '../../../shared/branch.model';

@Component({
  selector: 'app-branch-item',
  templateUrl: './branch-item.component.html',
  styleUrls: ['./branch-item.component.css']
})
export class BranchItemComponent implements OnInit {
  @Input() branch: Branch;
  @Input() indexInArray: number;

  constructor() { }

  ngOnInit() {
  }

}
