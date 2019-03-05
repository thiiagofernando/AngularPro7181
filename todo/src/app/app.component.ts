import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(11),
        Validators.required
      ])]
    });
    this.todos.push(new Todo(1, 'Passear com cachorro', false));
    this.todos.push(new Todo(2, 'ir ao supermercado', false));
    this.todos.push(new Todo(3, 'cortar cabelo', true));
  }
  alterarTexto(){
    this.title = 'Alterado';
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
  markAsDone(todo: Todo) {
    todo.done = true;
  }
  markasUndone(todo: Todo) {
    todo.done = false;
  }
}
