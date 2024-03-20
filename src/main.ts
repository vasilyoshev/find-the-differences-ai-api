import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: app.get(ConfigService).get('FRONTEND_BASE_URL'),
    credentials: true,
  });

  await app.listen(4200);
}
bootstrap();
