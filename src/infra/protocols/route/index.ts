import { ICreateRouteProtocolRepository } from './CreateRouteProtocolRepository';
import { IGetAllRouteProtocolRepository } from './GetAllRouteProtocolRepository';
import { IGetByIdRouteProtocolRepository } from './GetByIdRouteProtocolRepository';
import { IUpdateRouteProtocolRepository } from './UpdateRouteProtocolRepository';

export interface IRouteRepository
  extends ICreateRouteProtocolRepository,
    IGetAllRouteProtocolRepository,
    IGetByIdRouteProtocolRepository,
    IUpdateRouteProtocolRepository {}
