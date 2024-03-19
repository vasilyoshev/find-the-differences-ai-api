import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/healthcheck')
  getHealthcheck(): string {
    return this.appService.getHealthcheck();
  }

  @Get('/user/account')
  getUserInfo() {
    return this.appService.getUserInfo();
  }

  @Get('/user/balance')
  getBalance() {
    return this.appService.getBalance();
  }
}
