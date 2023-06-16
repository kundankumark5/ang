import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input() set appUnless(conditin: boolean) {      // method after set must be same name as selector
    if (!conditin) {
      this.vcRef.createEmbeddedView(this.tempRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(
    private tempRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
