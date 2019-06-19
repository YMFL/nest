import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ApiParamsValidationPipe } from './common/pipes/api-params-validation.pipe';
import { MyLogger } from './common/utils/myLogger';
import { AuthGuard } from "./common/guards/auth.guard";
import { Redis } from "./common/utils/redis";


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(new MyLogger());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ApiParamsValidationPipe());
  app.useGlobalGuards(new AuthGuard(new Redis()));
  await app.listen(3061);
}

bootstrap();
