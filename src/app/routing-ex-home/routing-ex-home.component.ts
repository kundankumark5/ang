import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-routing-ex-home',
  templateUrl: './routing-ex-home.component.html',
  styleUrls: ['./routing-ex-home.component.scss']
})
export class RoutingExHomeComponent implements OnInit {

  constructor(private _router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }
  onClickServerLoad(id: number) {
    this._router.navigate(['/routingExServers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });

  }
  onLogOut() {
    this.authService.logOut();
  }
  onLogIn() {
    this.authService.logIn()
  }
}
