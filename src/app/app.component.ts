import { Component } from '@angular/core';
// Import class so we can use it as dependency injection token in the constructor
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'To Do App';
  // No longer needed, now handled by TodoListHeaderComponent
  //newTodo: Todo = new Todo();

  // Ask Angular DI system to inject the dependency associated with the dependency injection token `TodoDataService` and assign it to a property called `todoDataService`
  constructor(private todoDataService: TodoDataService) {
  }

  
  // No longer needed, now handled by TodoListHeaderComponent
  // addTodo() {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

   // Add new method to handle event emitted by TodoListHeaderComponent
   onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
