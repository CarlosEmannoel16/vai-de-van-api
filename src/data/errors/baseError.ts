import { ValidationError } from 'yup';
export abstract class BaseError extends ValidationError {
  private statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message, null, '');

    this.statusCode = statusCode;
    this.message = message;
    this.name = this.constructor.name;
  }

  getStatusCode(): number {
    return this.statusCode;
  }
}
