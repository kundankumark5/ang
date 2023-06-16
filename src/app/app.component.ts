import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService],    //  we can provide our here too.. it will then available for all its child only(not for siblings)
})
export class AppComponent {
  title = 'ang';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  switchCaseVal: number = 10;
  oddNumsForUnlessDir: number[] = [1, 3, 5, 7, 9];
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a Test' },
  ];
  selectedView = 'Recipe';

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
