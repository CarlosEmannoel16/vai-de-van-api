export interface IUseCase<T, S> {
  handle(data: T): Promise<S> | S;
}
