import { Module, Global } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ReqInterceptor } from './common/Interceptors/res.interceptor';
import { Redis } from './common/utils/redis';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AccountModule],
  controllers: [AppController],
  providers: [
    AppService,
    Redis,
    {
      provide: APP_INTERCEPTOR,
      useClass: ReqInterceptor,
    },
  ],
  exports: [Redis],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
