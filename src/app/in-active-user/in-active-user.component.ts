import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-in-active-user',
  templateUrl: './in-active-user.component.html',
  styleUrls: ['./in-active-user.component.scss'],
})
export class InActiveUserComponent implements OnInit {
  users: string[];
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this.users = this._userService.inActiveUsers;
  }
  setToActive(id: number) {
    this._userService.onSetToActive(id);
  }
}
