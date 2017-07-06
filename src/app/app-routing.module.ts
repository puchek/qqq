import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './core/home/home.component';
import {WagonsComponent} from './wagons/wagons.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'branchesches', children: BranchesModule}
  {path: 'wagons', component: WagonsComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
