export interface ValidatorInterface<T> {
  validate(data: T): void;
}
