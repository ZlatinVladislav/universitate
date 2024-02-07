import { Injectable } from '@angular/core';
import * as localForage from 'localforage';

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

localForage.config({
    driver: localForage.INDEXEDDB, // Force IndexedDB; this will use IndexedDB or nothing
    name: 'myApp',
    storeName: 'myStore' // Should be alphanumeric, with underscores.
});


@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todos: Todo[] = [];
    private idCounter = 1;

    constructor() {
        this.loadTodos();
    }

    async loadTodos(): Promise<void> {
        const storedTodos = await localForage.getItem<Todo[]>('todos');
        if (storedTodos) {
            this.todos = storedTodos;
            this.idCounter = this.todos.length > 0 ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
        }
    }

    async saveTodos(): Promise<void> {
        await localForage.setItem('todos', this.todos);
    }

    getAllTodos(): Todo[] {
        return this.todos;
    }

    async addTodo(task: string): Promise<void> {
        this.todos.push({ id: this.idCounter++, task: task, completed: false });
        await this.saveTodos();
    }

    async removeTodo(id: number): Promise<void> {
        this.todos = this.todos.filter(todo => todo.id !== id);
        await this.saveTodos();
    }

    async toggleCompletion(id: number): Promise<void> {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            await this.saveTodos();
        }
    }
}
