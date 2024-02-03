import { StopValidator } from '../validator/StopValidator';

export class StopValidatorFactory {
  static create() {
    return new StopValidator();
  }
}
