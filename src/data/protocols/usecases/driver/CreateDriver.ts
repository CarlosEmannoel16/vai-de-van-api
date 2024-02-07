export interface ICreateDriverUseCase {
  create: (data: ICreateDriverUseCase.request) => Promise<ICreateDriverUseCase.response>;
}
export namespace ICreateDriverUseCase {
  export type request = {
    name: string;
    cnh: string;
    email: string;
    phone: string;
    date_of_birth: string;
    cpf: string;
    password: string;
    cnhDateOfIssue: string;
    cnhExpirationDate: string;
  };

  export type response = {
    name: string;
    cnh: string;
    email: string;
    phone: string;
    date_of_birth: string;
    cpf: string;
    password: string;
    cnhDateOfIssue: string;
    cnhExpirationDate: string;
    id: string;
  };
}
