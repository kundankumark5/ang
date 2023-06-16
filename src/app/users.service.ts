import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  activeUsers = ['Raghav', 'Rajesh'];
  inActiveUsers = ['Amogh', 'Anmol'];

  constructor(private _counterService: CounterService) {}

  logStatusChanges(status: string) {
    console.log(status);
  }

  onSetToInactive(id: number) {
    this.inActiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this._counterService.incrementActiveToInactive();

  }
  onSetToActive(id: number) {
    this.activeUsers.push(this.inActiveUsers[id]);
    this.inActiveUsers.splice(id, 1);
    this._counterService.incrementInactiveToActive();
  }
}
