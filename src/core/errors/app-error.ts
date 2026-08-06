import type { ErrorCode } from './error-codes';

export interface AppErrorOptions {
  error: ErrorCode;
  message: string;
  details?: unknown;
  cause?: unknown;
}

export class AppError extends Error {
  public readonly code: ErrorCode['code'];

  public readonly statusCode: number;

  public readonly details?: unknown;

  constructor({
    error,
    message,
    details,
    cause,
  }: AppErrorOptions) {
    super(message, cause ? { cause } : undefined);

    this.name = 'AppError';

    this.code = error.code;
    this.statusCode = error.status;
    this.details = details;

    Error.captureStackTrace(this, AppError);
  }
}