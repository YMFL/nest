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

export class PageInfoDto {
  @Type(() => Number)
  @Min(1, {
    message: '参数必须大于1',
    context: { errorCode: ApiErrorCode.USER_PAGE_INVALID },
  })
  @IsInt({
    message: '必须是整数',
    context: { errorCode: ApiErrorCode.USER_PAGE_INVALID },
  })
  readonly page: number;

  @Type(() => Number)
  @IsOptional()
  @Min(1, {
    message: '参数必须大于1',
    context: { errorCode: ApiErrorCode.USER_PAGE_INVALID },
  })
  @IsInt({
    message: '必须是整数',
    context: { errorCode: ApiErrorCode.USER_PAGE_INVALID },
  })
  readonly pageSize: number;
}
