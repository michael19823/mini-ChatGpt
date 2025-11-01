import { v4 as uuidv4 } from "uuid";

export interface LogContext {
  correlationId?: string;
  [key: string]: any;
}

class Logger {
  private getCorrelationId(req?: any): string {
    if (req && req.headers && req.headers["x-correlation-id"]) {
      return req.headers["x-correlation-id"] as string;
    }
    return uuidv4();
  }

  private formatMessage(
    level: string,
    message: string,
    context?: LogContext
  ): string {
    const timestamp = new Date().toISOString();
    const correlationId = context?.correlationId || "unknown";
    const contextStr = context
      ? Object.entries(context)
          .filter(([key]) => key !== "correlationId")
          .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
          .join(" ")
      : "";

    return `[${timestamp}] [${level}] [${correlationId}] ${message}${contextStr ? ` ${contextStr}` : ""}`;
  }

  info(message: string, context?: LogContext): void {
    console.log(this.formatMessage("INFO", message, context));
  }

  error(message: string, error?: Error | unknown, context?: LogContext): void {
    const errorContext = {
      ...context,
      error:
        error instanceof Error
          ? {
              name: error.name,
              message: error.message,
              stack: error.stack,
            }
          : String(error),
    };
    console.error(this.formatMessage("ERROR", message, errorContext));
  }

  warn(message: string, context?: LogContext): void {
    console.warn(this.formatMessage("WARN", message, context));
  }

  debug(message: string, context?: LogContext): void {
    console.debug(this.formatMessage("DEBUG", message, context));
  }

  middleware(req: any, res: any, next: any): void {
    const correlationId = this.getCorrelationId(req);
    req.correlationId = correlationId;
    res.setHeader("x-correlation-id", correlationId);

    this.info(`${req.method} ${req.path}`, {
      correlationId,
      method: req.method,
      path: req.path,
    });

    next();
  }
}

export const logger = new Logger();



