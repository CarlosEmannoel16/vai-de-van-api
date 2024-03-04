export interface IValidatorCreateDriver {
  validate(data: IValidatorCreateDriver.Params): Promise<any>;
}

export namespace IValidatorCreateDriver {
  export type Params = {
    name: string;
    email: string;
    cpf: string;
    phone: string;
  };
}
