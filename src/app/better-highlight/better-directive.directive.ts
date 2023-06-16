import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterDirective]',
})
export class BetterDirectiveDirective implements OnInit {
  @Input() defaultColor:string = 'transparent';
  @Input() highlightColor:string = 'blue';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
      //   this.elRef.nativeElement,
      //   'background-color',
      //   'blue',
      //   1 << 1
      // );  or we can do this way too...👇 ps : this will work only when host binding is being used
      this.backgroundColor = this.highlightColor;
    }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent',
    //   1 << 1
    // );  or we can do this way too...👇 ps : this will work only when host binding is being used
    this.backgroundColor =this.defaultColor;
  }
  ngOnInit(): void {


     this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue',
    //   1 << 1
    // );   // we can do this all with hostListener too.. where we can apply the changes on condition basis
  }
}
