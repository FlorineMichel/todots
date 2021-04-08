import { Controller, Get, Post, Delete, Param, Put, Body } from '@nestjs/common';
import { AppService } from './app.service';
import CreateTodoDto from './CreateTodoDto.interface';
import {Todo, TodoDocument} from "./todo.schema";

@Controller("todos")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async getAll(): Promise<Todo[]> {
    return await this.appService.findAll();
  }

  @Post()
  public postTodo(@Body() todo: CreateTodoDto): void {
    this.appService.addTodo(todo);
  }

  @Delete("/completed")
  public deleteCompleted(): void{
    // delete completed
  }

  @Delete("/all")
  public deleteAll(): void {
    // delete completed
  }

  @Delete(":id")
  public deleteTodoId(@Param('id') id: string): void {
    this.appService.deleteById(id);
    console.log(`delete id [${id}]`);
  }

  @Put(":id")
  public putTodoId(@Param('id') id: string): void{
    console.log('Todo modifie '+id);
  }

}
