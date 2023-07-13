import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  constructor() {}
  servers = [
    { id: 1, name: 'testServer', status: 'offline' },
    { id: 2, name: 'mainServer', status: 'offline' },
    { id: 3, name: 'localServer', status: 'online' },
    { id: 4, name: 'globalServer', status: 'offline' },
    { id: 5, name: 'optionalServer', status: 'offline' },
  ];

  getServers() {
    return this.servers;
  }
  getServer(id: number) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    return server;
  }
  updateServer(id: number, serverInfo: { name: string; status: string }) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
