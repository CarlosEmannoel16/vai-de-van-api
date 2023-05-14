import { BaseError } from './baseError';

export class UserNotFoundError extends BaseError {
  constructor(message: string) {
    super(message, 400);
    this.name = 'User not found';
  }
}
