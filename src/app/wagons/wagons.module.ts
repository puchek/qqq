import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WagonsComponent} from './wagons.component';
import {FormsModule}    from '@angular/forms';
import {InputTextModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {WagonsService} from './wagons.service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    DataTableModule,
    SharedModule,
    HttpModule
  ],
  declarations: [ WagonsComponent ],
  exports: [ WagonsComponent ],
  providers: [ WagonsService ]
})
export class WagonsModule { }
