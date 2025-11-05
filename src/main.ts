import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RESERVED_VALUE_PORT } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env);
  await app.listen(process.env.PORT ?? RESERVED_VALUE_PORT);
}
bootstrap();
