export interface IAuthCustomerProtocolUseCase {
  handler(
    email: string,
    password: string,
  ): Promise<IAuthCustomerProtocolUseCase.Result>;
}

export namespace IAuthCustomerProtocolUseCase {
  export type Result = {
    id: string;
    name: string;
    email: string;
    cpf: string;
    dateOfBirth: Date;
    phone: string;
    emailIsConfirmed: boolean;
  };
}
