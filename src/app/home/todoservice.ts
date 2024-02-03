import { Injectable } from '@angular/core';

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todos: Todo[] = [];
    private idCounter = 1;

    constructor() { }

    getAllTodos(): Todo[] {
        return this.todos;
    }

    addTodo(task: string): void {
        this.todos.push({ id: this.idCounter++, task: task, completed: false });
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    toggleCompletion(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
}
