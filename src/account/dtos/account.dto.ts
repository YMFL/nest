import {
  IsString,
  IsInt,
  IsNotEmpty,
  Min,
  Max,
  IsPhoneNumber,
  Length,
  IsOptional,
  IsEmpty,
  IsDefined,
} from 'class-validator';
import { ApiErrorCode } from '../../common/enums/api-error-code.enum';
import { Type } from 'class-transformer';
import { Account } from '../entity/account.entity';

export class AccountDto extends Account {
  @Type(() => Number)
  @IsInt({
    message: '用户ID必须是整数',
    context: { errorCode: ApiErrorCode.USER_ID_INVALID },
  })
  @Min(1, {
    message: '用户ID必须大于等于1',
    context: { errorCode: ApiErrorCode.USER_ID_INVALID },
  })
  readonly id: number;

  @IsPhoneNumber('CN', {
    message: '手机号格式不正确',
    context: { errorCode: ApiErrorCode.ARG_MOBILE_INVALID },
  })
  readonly mobile: string;

  @Length(6, 20, {
    message: '密码长度10至20位',
    context: { errorCode: ApiErrorCode.ARG_MOBILE_INVALID },
  })
  readonly password: string;
}

export class AccountNoIdDto extends Account {
  @IsPhoneNumber('CN', {
    message: '手机号格式不正确',
    context: { errorCode: ApiErrorCode.ARG_MOBILE_INVALID },
  })
  readonly mobile: string;

  @IsNotEmpty({
    message: '用户姓名是必不可少的',
    context: { errorCode: ApiErrorCode.USER_NAME_INVALID },
  })
  @IsString({
    message: '用户姓名是必不可少的',
    context: { errorCode: ApiErrorCode.USER_NAME_INVALID },
  })
  readonly name: string;
  @Length(6, 20, {
    message: '密码长度10至20位',
    context: { errorCode: ApiErrorCode.ARG_MOBILE_INVALID },
  })
  readonly password: string;
}
