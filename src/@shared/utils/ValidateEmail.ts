import { ValidateEmailInterface } from './interfaces/ValidateEmailInterface';

export class ValidatorEmailAdapter implements ValidateEmailInterface {
  validate(email: string): boolean {
    throw new Error('Method not implemented.');
  }
}
