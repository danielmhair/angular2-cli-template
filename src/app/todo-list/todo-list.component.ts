import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Todo, TodoService } from "./shared";

@Component({
  moduleId: module.id,
  selector: 'app-todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = new Todo({title: "", details: ""});

  constructor(public todoService: TodoService, public cd: ChangeDetectorRef) {
  }

  addTodo() {
    console.log(this.newTodo);
    this.todos.unshift(new Todo(this.newTodo));
    this.newTodo.title = "";
    this.newTodo.details = "";
  }

  removeTodo(index: number) {
    console.log("Removing item");
    this.todos.splice(index, 1);
  }

  editTodo(todo) {
    todo.edit = true;
  }

  saveTodo(todo) {
    //TODO Post to Mongo
    todo.edit = false;
  }

  ngOnInit() {
    console.log('hello `Todos` component');
    this.todoService.getAll()
      .subscribe((data) => {
        data.map(todo => {
          console.log(todo);
          return new Todo(todo);
        });
        this.todos.push(...data);
        console.log(this.todos);
        this.cd.detectChanges();
      });
  }
}
