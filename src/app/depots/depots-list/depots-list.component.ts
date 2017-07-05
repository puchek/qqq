import { Component, OnInit } from '@angular/core';
import {BranchesService} from '../../branches/branches.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Branch} from '../../shared/branch.model';
import {Depot} from '../../shared/depot.model';

@Component({
  selector: 'app-depots-list',
  templateUrl: './depots-list.component.html',
  styleUrls: ['./depots-list.component.css']
})
export class DepotsListComponent implements OnInit {
  branchIndex: number;
  branch: Branch;
  depots: Depot[];

  constructor(private branchService: BranchesService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.branchIndex = +params['id'];
          this.branch = this.branchService.getBranchByIndex(this.branchIndex);
          this.depots = this.branch.depots;
        }
      );

  }

}
