import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { Todo, TodoSchema } from './todo.schema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://u6ao9fwoxqsmb49cxas6:WPKPzR6GL6l1yeWOZcKU@baxtbwfvstko1lx-mongodb.services.clever-cloud.com:27017/baxtbwfvstko1lx'),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
