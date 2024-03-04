export interface IValidatorCreateCustomer {
  validate(data: IValidatorCreateCustomer.Params): Promise<any>;
}

export namespace IValidatorCreateCustomer {
  export type Params = {
    name: string;
    email: string;
    cpf: string;
    phone: string;
  };
}
