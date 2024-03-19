import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';

@Module({
  imports: [
    HttpModule.register({
      baseURL: 'https://api.stability.ai/v1/',
      headers: {
        Accept: 'application/json',
        authorization: 'Bearer sk-xRwOzr8D6m8M3zuDLIoYYz167iPSnfRreHSHjhHI5XimDcdP',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
