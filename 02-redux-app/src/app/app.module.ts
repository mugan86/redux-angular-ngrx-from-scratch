import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './counter/child/child.component';
import { GrandsonComponent } from './counter/grandson/grandson.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandsonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
