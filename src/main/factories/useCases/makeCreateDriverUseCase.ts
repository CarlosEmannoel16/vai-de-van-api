import { CreateDriverUseCase } from '@/data/usecases/driver/CreateDriverUseCase';
import { ICreateDriver } from '@/domain/usecases/driver/CreateDriver';
import { makeUserRepository } from '@makeRepositories';
export const makeCreateDriverUseCase = (): ICreateDriver => {
  return new CreateDriverUseCase(makeUserRepository(), makeUserRepository());
};
