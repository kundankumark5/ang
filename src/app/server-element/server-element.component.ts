import { Component, OnInit, Input, OnChanges, SimpleChanges,DoCheck, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy{
  // @Input('srvElement') element: { type: string; name: string; content: string };  // here srvElement is alias name means we can use it instead of element
  @Input() element: { type: string; name: string; content: string };
  constructor() {
    console.log('constructor is called')

  }

  ngOnChanges(changes: SimpleChanges): void {   // only hook receive a argument of type simple change 
    console.log('ngOnChanges called' )
    console.log(changes)  }

  ngOnInit(): void {

    console.log('ngOnInit is called')

  }
  ngDoCheck(): void {
  
    console.log('Ng do check called')
  }
ngAfterContentInit(): void {
  console.log('ng after content init called')
}
ngAfterContentChecked(): void {
  console.log('ng after content checked called')
}
ngAfterViewInit(): void {
  console.log('ngAfterViewInit called')
}
ngAfterViewChecked(): void {
  console.log('ng after view checked called')
}
ngOnDestroy(): void {
  console.log('ng on destroy called')
}
}
