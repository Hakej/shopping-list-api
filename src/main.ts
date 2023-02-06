import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CurrentDateLogger } from './Logger/CurrentDateLogger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const currentDateLogger = new CurrentDateLogger(60 * 1000);
  await app.listen(process.env.PORT || 5001);
}
bootstrap();
