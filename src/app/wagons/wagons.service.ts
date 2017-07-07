import { Injectable } from '@angular/core';
import {Wagon} from '../shared/wagon.model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WagonsService {
  wagons: Wagon[];

  constructor(private http: Http) { }

  getWagons() {
    return this.http.get('http://localhost:3000/wagons')
      .toPromise()
      .then(res => {
        // console.log(res.json());
        return <Wagon[]> res.json()
      });
      // .then(data => {
      //   console.log('here', data);
      //   return data;
      // });
  }

}
