import { Injectable } from '@angular/core';
import {Wagon, WagonObj} from '../shared/wagon.model';

@Injectable()
export class WagonsService {
  wagons: Wagon[] = [];
  wagonsObj: WagonObj[];

  constructor() {
    this.wagons = [
      new Wagon('000-11111', 'qwert', 'qwerty'),
      new Wagon('000-11112', 'qwert2', 'qwerty'),
    ];

    this.wagonsObj = [
      {
        serialNumber : '123456789',
        model: 'qwertyu',
        depot : 'zaxcvbnm'
      },
      {
        serialNumber : '876754',
        model: 'qwertyu',
        depot : 'zaxcvbnm'
      }
    ];
  }

  getWagons(): Wagon[] {
    return this.wagons;
  }

  getWagonsObj(): Wagon[] {
    return this.wagonsObj;
  }
}
