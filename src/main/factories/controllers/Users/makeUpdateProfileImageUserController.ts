import { UpdateProfileImageUserController } from '@/presentation/controller';
import { IController } from '@/presentation/protocols/IController';
export const makeUpdateProfileUserController = (): IController => {
  return new UpdateProfileImageUserController();
};
