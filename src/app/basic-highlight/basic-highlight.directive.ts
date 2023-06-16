import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[appBasicHightlight]',
})
export class BasicHightlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';  // although it works but not a ideal approach to directly accessing a element, so we will use 'renderer2' in 'better-directive' directive example
  }
}
