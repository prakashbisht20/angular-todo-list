import { Component, OnInit} from '@angular/core';  
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import {LocalStorageService} from '../local-storage-service'
import { Todo } from "../todo";
import {AddTodo} from '../add-todo/add-todo'
import {TodoItem} from '../todo-item/todo-item'

@Component({
  selector: 'app-todos',
  imports: [CommonModule, FormsModule, AddTodo,TodoItem],  
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos  implements OnInit {
  localItem: string | null;
  todos:Todo[];
  localStorage:LocalStorageService;
  constructor(private localStorageObj: LocalStorageService) { 
    this.localItem = localStorageObj.getItem("todos");
    if(this.localItem == null){
    this.todos = [];
    }
    else{ 
      this.todos = JSON.parse(this.localItem); 
    }

   }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo); 
    this.todos.push(todo); 
    this.localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){ 
    const index = this.todos.indexOf(todo);
    console.log(index)
    this.todos[index].active = !this.todos[index].active;
    this.localStorage.setItem("todos", JSON.stringify(this.todos));
    
    console.log(todo)
  }
}