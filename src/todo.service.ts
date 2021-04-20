import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, QueryOptions} from 'mongoose';
import CreateTodoDto from './CreateTodoDto.interface';
import { Todo, TodoDocument } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async addTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoDto);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async deleteById(id: string): Promise<void> {
     this.todoModel.deleteOne({_id: id}).exec();
  }

  async deleteAll(): Promise<void> {
     this.todoModel.deleteMany({}).exec();
  }

  async deleteCompleted(): Promise<void> {
    this.todoModel.deleteMany({state: "completed"}).exec();
  }

  async toggleTodo(id: string): Promise<Todo>{
    const todo = await this.todoModel.findOne({_id: id});
    return  todo.update({state: todo.state === "pending" ? "completed" : "pending"});
  }
}