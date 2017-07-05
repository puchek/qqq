import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotsListComponent } from './depots-list/depots-list.component';
import { DepotItemComponent } from './depots-list/depot-item/depot-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ DepotsListComponent, DepotItemComponent ]
})
export class DepotsModule { }
