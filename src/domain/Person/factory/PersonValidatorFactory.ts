import { ValidatorInterface } from '@/domain/@shared/validator/ValidatorInterface';
import PersonInterface from '../protocols/PersonInterface';
import { CustomerYupValidator } from '../validate/CustomerYupValidator';

export class CustomerValidatorFactory {
  static create(): ValidatorInterface<PersonInterface> {
    return new CustomerYupValidator();
  }
}
