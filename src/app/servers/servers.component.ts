import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',   // we can use backtick if we want to add more than one line of html instead of html file
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
 allowNewServer: boolean = false;
 serverCreationStatus: string = "no server created yet";
 serverName = "";
  constructor() { 
 setTimeout(() => {
  this.allowNewServer =true
 }, 2000);
  }

  ngOnInit(): void {
  }
onServerCreations(){ 
   this.serverCreationStatus= "server is created";
}
onServerUpdate(event:Event){
this.serverName=(<HTMLInputElement> event.target).value;
}
}
