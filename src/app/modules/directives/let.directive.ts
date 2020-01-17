import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export interface LetContext<T> {
  $implicit?: T;
  appLet?: T;
}

@Directive({
  selector: '[appLet]'
})
export class LetDirective<T> {

  private context: LetContext<T> = {
    $implicit: undefined,
    appLet: undefined
  };

  constructor(private readonly viewRef: ViewContainerRef,
              private readonly templateRef: TemplateRef<LetContext<T>>) {
    this.viewRef.createEmbeddedView(this.templateRef, this.context);
  }

  @Input()
  set appLet(value: T) {
    this.context.appLet = this.context.$implicit = value;
  }
}
