import {Injectable, OnInit} from '@angular/core';
import {Branch} from '../shared/branch.model';
import {Subject} from 'rxjs/Subject';
import {Depot} from '../shared/depot.model';

@Injectable()
export class BranchesService {
  branchesChanged = new Subject<Branch[]>();

  private branches: Branch[] = [
    new Branch('1', 'Москва', [
      new Depot('ЛВЧД-7 Киров', '1', 'Е.В.Попов, зам. нач. по эксплуатации, т. (909) 721-31-11 '),
      new Depot('ЛВЧ Казаньв', '2', 'Электроник Сафин М.М. 89673664428 ')
    ]),
    new Branch('2', 'Питер')
  ];

  constructor() {}

  getBranches () {
    return this.branches;
  }

}
