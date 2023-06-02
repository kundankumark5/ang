import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent implements OnInit {
  // @Output('anyAliasName') serverCreated = new EventEmitter<{
  //   serverName: string;
  //   serverContent: string;
  // }>(); we can use this alias name instead of serverCreated we are listening this

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverNameInput') serverNameInput: ElementRef;
  @ViewChild('serverBlueprintInput') serverBlueprintInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  //  with local ngmodel value 👇

  // onServerAdded() {
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }
  // onBlueprintAdded() {
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent,
  //   });
  // }

  onServerAdded(inputValue: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: inputValue.value,
      serverContent: this.serverBlueprintInput.nativeElement.value,
    });
    console.log(this.serverNameInput);
  }

  //  with local refrence value 👇

  onBlueprintAdded(
    inputValue: HTMLInputElement,

  ) {
    this.blueprintCreated.emit({
      serverName: inputValue.value,
      serverContent: this.serverBlueprintInput.nativeElement.value,
    });
  }
}
