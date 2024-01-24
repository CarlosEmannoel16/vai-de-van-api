export interface IGetAllDriversUseCase {
  execute(): Promise<IGetAllDriversUseCase.Result[]>;
}

export namespace IGetAllDriversUseCase {
  export type Result = {
    id: string;
    name: string;
  };
}
