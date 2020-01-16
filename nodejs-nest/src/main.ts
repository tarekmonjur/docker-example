import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log('app listen ', process.env.ENV_PORT);
  await app.listen(process.env.ENV_PORT);
}
bootstrap();
