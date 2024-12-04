import { NestFactory } from '@nestjs/core';

/* Modules */
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';

/* This allows us to use .env variables */
ConfigModule.forRoot();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.APP_PORT);
  console.log(`Server running on http://localhost:${process.env.APP_PORT}`);
}
bootstrap();
