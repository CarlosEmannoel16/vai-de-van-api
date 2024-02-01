import PersonInterface from './PersonInterface';

export interface DriverInterface extends PersonInterface {
  get cnh(): string;
  get cnhDateOfIssue(): Date;
  get cnhExpirationDate(): Date;

}
