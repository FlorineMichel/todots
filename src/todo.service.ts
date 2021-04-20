import { Todo } from "./models/todo";
import { Id } from "./models/types";

const API_URL = 'http://app-2e02f2e5-c07a-474d-8ff8-d6faccadf007.cleverapps.io';

export interface TodoDTO {
    _id: Id;
    name: string;
    state: "completed" | "pending";
}

/**
 * Map a todo from the API to the internal todo model.
 * @param dto Todo from the API
 * @returns
 */
function todoFromDTO(dto: TodoDTO): Todo {
    return ({
        id: dto._id,
        name: dto.name,
        completed: dto.state === 'completed'
    });
}

export class TodoService {
    static instance?: TodoService;
    private constructor() { }

    static getInstance(): TodoService {
        if (!this.instance) {
            this.instance = new TodoService();
        }
        return this.instance;
    }

    async getTodos(): Promise<Todo[]> {
        const res = await fetch(`${API_URL}/todos`);
        const todos = await res.json();

        return todos.map(todoFromDTO);
    }

    async createTodo(name: string) {
        const res = await fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                state: 'PENDING'
            })
        });
        const todo = await res.json();

        return todoFromDTO(todo);
    }

    async delete(id: Id) {
        await fetch(`${API_URL}/todos/${id}`, {
            method: 'DELETE',
        });
    }

    async deleteCompleted() {
        await fetch(`${API_URL}/todos/completed`, { method: 'DELETE' });
    }

    async toggleTodo(id: Id) {
        await fetch(`${API_URL}/todos/${id}`, {
            method: 'PUT'
        });
    }
}