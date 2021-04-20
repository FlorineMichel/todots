import { NestFactory } from '@nestjs/core';
import { AppModule } from './todo.module';
// import * as mongoose from 'mongoose';

// mongoose.set('useFindAndModify', false);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.enableCors();
  await app.listen(3000);
}
bootstrap();
