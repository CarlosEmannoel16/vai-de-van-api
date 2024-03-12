import { RequestAdapter } from '@/main/utils';
import { IResponse } from '../utils/response';

export interface IController {
  handle(req: RequestAdapter): Promise<IResponse>;
}
