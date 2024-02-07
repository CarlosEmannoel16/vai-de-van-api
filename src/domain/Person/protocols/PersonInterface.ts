export default interface PersonInterface {
  get name(): string;
  get dateOfBirth(): Date;
  get email(): string;
  get cpf(): string;
  get id(): string;
  get phone(): string;
  get password(): string;
  get dateOfCreate(): Date;
  get dateOfUpdate(): Date;
}
