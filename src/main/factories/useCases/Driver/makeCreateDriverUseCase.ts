import { CreateDriverUseCase } from '@/data/usecases/driver/CreateDriverUseCase';
import { ICreateDriver } from '@/domain/usecases/driver/CreateDriver';
import { UserRepository } from '@/infra/UserRepository';
export const makeCreateDriverUseCase = (): ICreateDriver => {
  return new CreateDriverUseCase(new UserRepository(), new UserRepository());
};
