import { Logger } from '@nestjs/common';

export class MyLogger extends Logger {
  log(message: string) {}
  error(message: string, trace: string) {
    super.error(message, trace);
  }
  warn(message: string) {}
  debug(message: string) {}
  verbose(message: string) {}
}
