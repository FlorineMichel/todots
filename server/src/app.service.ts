import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CreateTodoDto from './CreateTodoDto.interface';
import { Todo, TodoDocument } from './todo.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async addTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async deleteById(id: string): Promise<void> {
    this.todoModel.deleteOne({_id: id});
  }
}
