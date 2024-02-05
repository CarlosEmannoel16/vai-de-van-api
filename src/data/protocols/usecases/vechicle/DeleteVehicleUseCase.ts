export interface IDeleteVehicleUseCase {
  execute(id: string): Promise<boolean>;
}
