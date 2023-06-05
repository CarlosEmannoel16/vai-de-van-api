import { DriverModel } from '@/domain/models/DriverModel';
import { Travel, Vehicle } from '@prisma/client';

export interface IGetUserById {
  execute(idUser: string): Promise<IGetUserById.Result>;
}

export namespace IGetUserById {
  export type Result = {
    id: string;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    date_of_birth: Date;
    cnhDateOfIssue: Date
    cnhExpirationDate: Date
    type: string;
    cnh: string
    Vehicle: Vehicle[]
  };
}
