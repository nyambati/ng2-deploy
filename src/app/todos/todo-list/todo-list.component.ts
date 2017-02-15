import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [ TodoService ]
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  active: Todo;

  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit() {
    this._todoService.getAll()
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  createNew() {
    const newTodo = new Todo();
    this.todos.push(newTodo);
    this.active = newTodo;
  }

}
