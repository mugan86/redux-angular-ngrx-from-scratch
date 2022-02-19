import { TodoModule } from './todos/todo.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

// NGRX
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
