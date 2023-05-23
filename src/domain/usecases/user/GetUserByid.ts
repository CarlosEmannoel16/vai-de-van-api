import { DriverModel } from '@/domain/models/DriverModel';

export interface IGetUserById {
  execute(idUser: string): Promise<IGetUserById.Result>;
}

export namespace IGetUserById {
  export type Result = {
    id: string;
    name: string;
    password: string;
    email: string;
    cpf: string;
    phone: string;
    date_of_birth: Date;
    type: string;
    Driver: DriverModel[];
  };
}
