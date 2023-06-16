// import { Directive, HostBinding, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]',
// })
// export class dropdownDirective {
//   @HostBinding('class.open') isOpen = false;

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;

  //  //  although this will work and dropdown will open/close on click , but close only when until we click on dropdown itself , but as a ideal behaviour it must be close if we click anywhere  outside of this dropdwon , however we can achieve by bellow code 👇
//   }
// }

import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class dropdownDirective {
  constructor(private elRef: ElementRef) {}
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
}
