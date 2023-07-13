import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-ex-users',
  templateUrl: './routing-ex-users.component.html',
  styleUrls: ['./routing-ex-users.component.scss'],
})
export class RoutingExUsersComponent implements OnInit {
  constructor() {}
  users = [
    { id: 1, name: 'Radhe' },
    { id: 2, name: 'Shayama' },
    { id: 3, name: 'RasViharini' },
    { id: 4, name: 'Brajeswari' },
  ];

  ngOnInit(): void {}
}
