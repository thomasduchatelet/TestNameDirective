import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TestNameUuidDirective } from "./test-name-uuid.directive";
import { TestNameDirective } from "./test-name.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TestNameUuidDirective, TestNameDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
