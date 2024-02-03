import { ValidatorInterface } from '@/domain/@shared/validator/ValidatorInterface';
import { CustomerInterface } from '../protocols/CustomerInterface';
import * as yup from 'yup';

export class CustomerYupValidator
  implements ValidatorInterface<CustomerInterface>
{
  validate(data: CustomerInterface): void {
    const schema = yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      email: yup.string().email().required(),
      cpf: yup.string().required(),
      phone: yup.string().required(),
      secondaryPhone: yup.string().required(),
    });

    schema.validateSync(data);
  }
}
