import { Directive, ElementRef, HostBinding, Input } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Directive({
  selector: "[testName]"
})
export class TestNameDirective {
  @Input()
  suffix!: string;

  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.name = "tst-" + this.suffix;
  }
}
