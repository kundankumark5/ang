import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-routing-ex-user',
  templateUrl: './routing-ex-user.component.html',
  styleUrls: ['./routing-ex-user.component.scss'],
})
export class RoutingExUserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  constructor(private route: ActivatedRoute) {}
  paramSubscription: Subscription;

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.paramSubscription = this.route.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }
  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }
}
