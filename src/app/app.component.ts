import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a Test' },
  ];
  selectedView ='Recipe';
  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'Blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
  onIntervalFired(event: number) {
    if (event % 2 === 0) {
      this.evenNumbers.push(event);
    } else this.oddNumbers.push(event);
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
  onNavigate(feature) {
    this.selectedView = feature;
  }
}
