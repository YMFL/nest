import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpStatus,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Redis } from '../../common/utils/redis';
import { ApiException } from '../exceptions/api.exception';

import { ApiErrorCode } from '../enums/api-error-code.enum';

@Injectable()
export class AuthGuard implements CanActivate {
  private redis: Redis = new Redis();

  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (request.headers.token) {
      try {
        let res = await this.redis.get(request.headers.token);
        if (res === 't') {
          return true;
        } else {
          throw new ApiException(
            '用户token失效',
            ApiErrorCode.USER_ID_OUT,
            HttpStatus.BAD_REQUEST,
          );
        }
      } catch (e) {
        throw new ApiException(
          '用户token失效',
          ApiErrorCode.USER_ID_OUT,
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      return false;
    }
  }
}
