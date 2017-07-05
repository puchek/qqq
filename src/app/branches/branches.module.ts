import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BranchesListComponent} from './branches-list/branches-list.component';
import {BranchItemComponent} from './branches-list/branch-item/branch-item.component';
import { BranchesComponent } from './branches.component';
import { BranchesStartComponent } from './branches-start/branches-start.component';
import {BranchesRoutingModule} from './branches-routing.module';

@NgModule({
  declarations: [
    BranchesListComponent,
    BranchItemComponent,
    BranchesComponent,
    BranchesStartComponent
  ],
  imports: [
    CommonModule,
    BranchesRoutingModule
  ]
})
export class BranchesModule { }
