import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchesService } from '../branches/branches.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    BranchesService
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
  ]
})
export class CoreModule { }
