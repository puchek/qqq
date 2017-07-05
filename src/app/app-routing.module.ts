import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent} from './home/home.component';
import { BranchesComponent} from './branches/branches.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'branches', component: BranchesComponent}
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
