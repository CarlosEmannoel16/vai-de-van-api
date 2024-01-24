import { Driver } from '../entity/Driver';

interface params {
  id: string;
  cnh?: string;
  idUser?: string;
  cnhDateOfIssue?: Date;
  cnhExpirationDate?: Date;
  name: string;
  email?: string;
}

export class DriverFactory {
  static create({
    id,
    cnh,
    idUser,
    cnhDateOfIssue,
    cnhExpirationDate,
    name,
  }: params): Driver {
    const driver = new Driver(id, name, idUser);

    return driver;
  }

  static createMany(data: params[]): Driver[] {
    return data.map((item) => this.create(item));
  }
}
