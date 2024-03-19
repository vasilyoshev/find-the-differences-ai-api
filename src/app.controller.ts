import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from 'app.service';
import { PicturesRequest } from 'interfaces';

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

  @Post('generate')
  generatePictures(@Body() body: PicturesRequest) {
    return this.appService.generatePictures(body);
  }
}
