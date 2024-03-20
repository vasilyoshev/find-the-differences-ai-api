import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';

@Module({
  imports: [
    ConfigModule.forRoot(), // enables using .env variables in module
    HttpModule.register({
      baseURL: 'https://api.stability.ai/v1/',
      headers: {
        Accept: 'application/json',
        authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
