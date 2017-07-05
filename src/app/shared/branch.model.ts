import { Depot } from './depot.model';

export class Branch {
  constructor( public code: string, public name: string, public depots?: Depot[], public id?: string) { }
}
