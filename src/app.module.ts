import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import {ReqInterceptor} from './common/Interceptors/res.interceptor'

@Module({
  imports: [TypeOrmModule.forRoot(),UsersModule],
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_INTERCEPTOR,
    useClass: ReqInterceptor,
  },],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
