import { Controller, Get, Post, Delete, Param, Put, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import CreateTodoDto from './CreateTodoDto.interface';
import {Todo, TodoDocument} from "./todo.schema";

@Controller("todos")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  public async getAll(): Promise<Todo[]> {
    return await this.todoService.findAll();
  }

  @Post()
  public async postTodo(@Body() todo: CreateTodoDto): Promise<Todo> {
    todo.state = todo.state.toLowerCase();
    return this.todoService.addTodo(todo);
  }

  @Delete("/completed")
  public deleteCompleted(): void{
    // delete completed
    this.todoService.deleteCompleted();
  }

  @Delete("/all")
  public deleteAll(): void {
    this.todoService.deleteAll();
  }

  @Delete(":id")
  public deleteTodoId(@Param('id') id: string): void {
    this.todoService.deleteById(id);
  }

  @Put(":id")
  public async putTodoId(@Param('id') id: string): Promise<Todo>{
    return this.todoService.toggleTodo(id);
  }

}
