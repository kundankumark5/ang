import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent implements OnInit {
  // @Input('srvElement') element: { type: string; name: string; content: string };  // here srvElement is alias name means we can use it instead of element
  @Input() element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit(): void {}
}
