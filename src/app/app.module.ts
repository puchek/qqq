import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BranchesComponent } from './branches/branches.component';
import { BranchesService } from './branches/branches.service';
import { BranchItemComponent } from './branches/branch-item/branch-item.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    BranchesComponent,
    BranchItemComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ BranchesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
