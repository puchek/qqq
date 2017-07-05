import {Component, OnDestroy, OnInit} from '@angular/core';
import { BranchesService } from './branches.service';
import { Branch } from '../shared/branch.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit, OnDestroy {
  branches: Branch[];
  subscribtion: Subscription;

  constructor(private branchService: BranchesService) { }

  ngOnInit() {
    this.branches = this.branchService.getBranches();
    console.log('subscribe');
    this.subscribtion = this.branchService.branchesChanged
      .subscribe(
        (branches: Branch[]) => {
          console.log('catched');
          this.branches = branches;
        }
      );
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
