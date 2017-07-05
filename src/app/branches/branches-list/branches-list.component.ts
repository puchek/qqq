import {Component, OnDestroy, OnInit} from '@angular/core';
import { BranchesService } from '../branches.service';
import { Branch } from '../../shared/branch.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-branche-list',
  templateUrl: './branches-list.component.html',
  styleUrls: ['./branches-list.component.css']
})
export class BranchesListComponent implements OnInit, OnDestroy {
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
