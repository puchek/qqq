import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BranchesComponent} from './branches.component';
import {BranchesStartComponent} from './branches-start/branches-start.component';
import {DepotsListComponent} from '../depots/depots-list/depots-list.component';

const branchesRoutes: Routes = [
  { path: 'branches', component: BranchesComponent, children: [
    { path: '', component: BranchesStartComponent },
    { path: ':id', component: DepotsListComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(branchesRoutes)
  ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class BranchesRoutingModule {}
