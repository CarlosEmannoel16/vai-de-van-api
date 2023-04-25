export interface ICreateState {
  execute(data: ICreateState.Params): Promise<ICreateState.Result>;
}

export namespace ICreateState {
  export type Params = {
    name: string;
    uf: string;
  };

  export type Result = {
    id: string;
    name: string;
    uf: string;
  };
}
