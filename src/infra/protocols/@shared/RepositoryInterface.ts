export interface  IRepository<P, T> {
  getOne(id: string): Promise<T>;
  create(data: P): Promise<T>;
  update(data: P): Promise<T>;
  getAll(): Promise<T[]>;
}
