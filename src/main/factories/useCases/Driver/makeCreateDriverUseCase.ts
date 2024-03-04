import { ICreateDriverUseCase } from '@/data/protocols/usecases/driver/CreateDriver';
import { CreateDriverUseCase } from '@/data/usecases/driver/CreateDriverUseCase';
import { DriverRepository } from '@/infra/DriverRepository';
export const makeCreateDriverUseCase = (): ICreateDriverUseCase => {
  return new CreateDriverUseCase(new DriverRepository());
};
