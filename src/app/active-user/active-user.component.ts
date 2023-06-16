import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss'],
})
export class ActiveUserComponent implements OnInit {
  users: string[];
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.users = this._userService.activeUsers;
  }
  setToInactive(id: number) {
    this._userService.onSetToInactive(id);
  }
}
