import { DriverModel } from "./DriverModel";

export enum TypeUser {
  ADM, DRIVER
}

export type UserModel = {
  id: string;
  name: string;
  password?: string;
  email: string;
  phone: string;
  date_of_birth: Date
  type: string;
  cpf: string;
  Driver?: DriverModel[]

};
