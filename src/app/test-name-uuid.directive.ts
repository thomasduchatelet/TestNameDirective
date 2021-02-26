import { Directive, ElementRef, HostBinding, Input } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Directive({
  selector: "[testNameUuid]"
})
export class TestNameUuidDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.name = "tst-" + uuidv4();
  }
}
