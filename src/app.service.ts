import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable, map } from 'rxjs';
import { Balance, User } from './interfaces';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHealthcheck(): string {
    return 'Healthcheck!';
  }

  getUserInfo(): Observable<AxiosResponse<User>> {
    return this.httpService.get('user/account').pipe(map(response => response.data));
  }

  getBalance(): Observable<AxiosResponse<Balance>> {
    return this.httpService.get('user/balance').pipe(map(response => response.data));
  }
}
