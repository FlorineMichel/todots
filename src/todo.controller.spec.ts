import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

describe('AppController', () => {
  let todoController: TodoController;

  beforeEach(async () => {
    const todo: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [TodoService],
    }).compile();

    todoController = todo.get<TodoController>(TodoController);
  });
});
