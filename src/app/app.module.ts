import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoEditorComponent } from './todos/todo-editor/todo-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
