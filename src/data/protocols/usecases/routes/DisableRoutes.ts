export interface IDisableRouteUseCase {
    execute(idRoute: string): Promise<Boolean>;
  }
  

  