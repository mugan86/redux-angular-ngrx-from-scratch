import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './counter/child/child.component';
import { GrandsonComponent } from './counter/grandson/grandson.component';

// NGRX

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandsonComponent
  ],
  imports: [
    BrowserModule,
    // forRoot para el global
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
