import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todo, TodoSchema } from './todo.schema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://u6ao9fwoxqsmb49cxas6:WPKPzR6GL6l1yeWOZcKU@baxtbwfvstko1lx-mongodb.services.clever-cloud.com:27017/baxtbwfvstko1lx'),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
