import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-routing-ex-servers',
  templateUrl: './routing-ex-servers.component.html',
  styleUrls: ['./routing-ex-servers.component.scss'],
})
export class RoutingExServersComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serverService: ServersService
  ) {}
  servers = [];
  ngOnInit(): void {
  this.servers = this.serverService.getServers();
  }

  reloadPage() {
    // this.router.navigate(['routingExServers']) // apart from router link , navigate doesn't mind absolute (/ at beginning) or relative (just path without /) path so no error even you use relative path in same component, if you explicitly want to correct this you can use 👇
    this.router.navigate(['/routingExServers'], { relativeTo: this.route }); // now with relative link in same comp it will return a err if clicked
  }
}
