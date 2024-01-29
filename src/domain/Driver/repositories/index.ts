import { IGetDriverByIdProtocolRepository } from '@/infra/protocols/user/GetDriverByIdProtocolRepository';
import { CreateDriverProtocolRepository } from './CreateDriverProtocolRepository';
import { IFindAllDriversProtocolRepository } from './FindAllDriversProtocolRepository';
import { IFindDriverByIdProtocolRepository } from './GetDriverByIdProtocolRepository';

export interface IDriverProtocolRepository
  extends CreateDriverProtocolRepository,
    IFindAllDriversProtocolRepository,
    IFindDriverByIdProtocolRepository {}
