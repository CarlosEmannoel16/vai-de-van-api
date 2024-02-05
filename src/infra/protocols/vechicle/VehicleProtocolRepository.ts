export interface IVehicleProtocolRepository<T> {
  create(data: T): Promise<T>;
  getOneByParams(data: { plate: string }): Promise<T>;
  deleteById(id: string): Promise<boolean>;
  getTravelsActives(id: string): Promise<{ id: string }[]>;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T>;
  update(data: T): Promise<T>;
}
