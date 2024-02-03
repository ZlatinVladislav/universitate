import { Injectable } from '@angular/core';

export interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    private todos: Todo[] = [
        {
            "id": 1,
            "task": "1",
            "completed": false
        },
        {
            "id": 2,
            "task": "2",
            "completed": false
        },
        {
            "id": 3,
            "task": "3",
            "completed": false
        },
        {
            "id": 4,
            "task": "4",
            "completed": false
        },
        {
            "id": 5,
            "task": "5",
            "completed": false
        }
    ];
    private currentId = 1;

    constructor() { }

    getAllTodos(): Todo[] {
        console.log(this.todos)
        return this.todos;
    }

    addTodo(task: string): void {
        this.todos.push({ id: this.currentId++, task, completed: false });
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
