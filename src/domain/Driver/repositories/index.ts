import { CreateDriverProtocolRepository } from './CreateDriverProtocolRepository';
import { IFindAllDriversProtocolRepository } from './FindAllDriversProtocolRepository';

export interface IDriverProtocolRepository
  extends CreateDriverProtocolRepository, IFindAllDriversProtocolRepository {}
