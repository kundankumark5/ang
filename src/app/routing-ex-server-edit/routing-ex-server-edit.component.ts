import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-routing-ex-server-edit',
  templateUrl: './routing-ex-server-edit.component.html',
  styleUrls: ['./routing-ex-server-edit.component.scss'],
})
export class RoutingExServerEditComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdits = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((par: Params) => {
      this.server = this.serversService.getServer(+par['id']);
    });
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdits = queryParams['allowEdits'] === '1' ? true : false;
    });
    this.route.fragment.subscribe();
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
  onEdit() {
    this.router.navigate(['routingExServers', this.server.id,{queryPramasHandling:'preserve'}]);  // we can add {relativeTo:this.route} and use this.router.navigator(['anyWordToAppend'],{relativeTo:this.route}) so that it can append 'anyWordToAppend' with currently loaded route
  }
}
