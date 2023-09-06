import { IAssociateAndCreateVehicleDriverRepository } from './AssociateAndCrreateVechicleDriverRepository';
import { IAssociateVehicleDriverRepository } from './AssociateVechileDriverRepository';
import { ICreateVehicleProtocolRepository } from './CreateVechileProtocolRepository';
import { IDeleteVehicleRepository } from './DeleteVehicleRepository';
import { GetVehicleByIdProtocolRepository } from './GetVechicleByIdProtocolRepository';
import { GetVehicleProtocolRepository } from './GetVechileProtocolRepository';
import { GetVehicleByParamsProtocolRepository } from './GetVehicleByParamsProtocolRepository';

export interface IVehicleProtocolRepository
  extends IAssociateAndCreateVehicleDriverRepository,
    IAssociateVehicleDriverRepository,
    ICreateVehicleProtocolRepository,
    GetVehicleByIdProtocolRepository,
    GetVehicleProtocolRepository,
    IDeleteVehicleRepository,
    GetVehicleByParamsProtocolRepository {}
