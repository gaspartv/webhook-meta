import { Logger } from "@nestjs/common";

export class Log {
  static info(message: string, context?: string) {
    if (context) return Logger.log(message, context);
    return Logger.log(message);
  }

  static error(message: string, context?: string) {
    if (context) return Logger.error(message, context);
    return Logger.error(message);
  }

  static warn(message: string, context?: string) {
    if (context) return Logger.warn(message, context);
    return Logger.warn(message);
  }

  static debug(message: string, context?: string) {
    if (context) return Logger.debug(message, context);
    return Logger.debug(message);
  }

  static verbose(message: string, context?: string) {
    if (context) return Logger.verbose(message, context);
    return Logger.verbose(message);
  }
}
