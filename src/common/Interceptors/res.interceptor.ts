import { ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Res } from '../entity/res';

@Injectable()
export class ResInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    // 请自行了解什么是 Rxjs
    return call$.pipe(
      map(async data => {
        let res = new Res();
        res.message = 'success';
        res.code = 1;
        res.data = data;
        return res;
      }),
    );
  }
}
