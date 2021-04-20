import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type TodoDocument = Todo & mongoose.Document;

@Schema()
export class Todo {
  @Prop({required: true})
  id: string;

  @Prop({required: true})
  name: string;

  @Prop({required: true})
  state: string;
}

// export const TodoSchema = SchemaFactory.createForClass(Todo);

export const TodoSchema = new mongoose.Schema({
    id: String,
    name: String,
    state: String,
  });