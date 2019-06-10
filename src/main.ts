import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {HttpExceptionFilter} from './common/filters/http-exception.filter';
import {ApiParamsValidationPipe} from './common/pipes/api-params-validation.pipe';
import {MyLogger} from "./common/utils/myLogger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(new MyLogger())
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ApiParamsValidationPipe());
  await app.listen(3061);
}

bootstrap();
