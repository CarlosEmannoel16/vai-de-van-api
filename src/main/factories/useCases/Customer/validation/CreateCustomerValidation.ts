import { IValidatorCreateCustomer } from '@/data/protocols/usecases/customer/actions/ValidatorCreateCustomerProtocol';
import { ValidateCreateCustomer } from '@/data/usecases/customer/validations/CreateCustomerValidation';
import { CheckIfCPFCustomerExists } from '@/data/usecases/customer/validations/actions/CheckIfCpfCustomerExists';
import { CheckIfEmailCustomerExists } from '@/data/usecases/customer/validations/actions/CheckIfCustomerEmailExists';
import { CheckIfPhoneCustomerExists } from '@/data/usecases/customer/validations/actions/CheckIfPhoneCustomerExists';
import { CustomerPrismaRepository } from '@/infra/CustomerRepository';

export const makeCreateCustomerValidate = (): IValidatorCreateCustomer => {
  const customerRepository = new CustomerPrismaRepository();
  const validateEmail = new CheckIfEmailCustomerExists(customerRepository);
  const validatePhone = new CheckIfPhoneCustomerExists(customerRepository);
  const validateCPF = new CheckIfCPFCustomerExists(customerRepository);
  const validateCustomer = new ValidateCreateCustomer(
    validateEmail,
    validateCPF,
    validatePhone,
  );

  return validateCustomer;
};
