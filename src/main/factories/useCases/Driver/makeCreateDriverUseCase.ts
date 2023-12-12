import { CreateDriverUseCase } from '@/data/usecases/driver/CreateDriverUseCase';
import { ICreateDriver } from '@/data/protocols/usecases/driver/CreateDriver';
import { UserRepository } from '@/infra/UserRepository';
export const makeCreateDriverUseCase = (): ICreateDriver => {
  return new CreateDriverUseCase(new UserRepository(), new UserRepository());
};
