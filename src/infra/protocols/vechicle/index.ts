import { IAssociateAndCreateVechileDriverRepository } from './AssociateAndCrreateVechicleDriverRepository';
import { IAssociateVechileDriverRepository } from './AssociateVechileDriverRepository';
import { ICreateVechileProtocolRepository } from './CreateVechileProtocolRepository';
import { IDeleteVehicleRepository } from './DeleteVehicleRepository';
import { GetVechicleByIdProtocolRepository } from './GetVechicleByIdProtocolRepository';
import { GetVechicleProtocolRepository } from './GetVechileProtocolRepository';

export interface IVehicleProtocolRepository
  extends IAssociateAndCreateVechileDriverRepository,
    IAssociateVechileDriverRepository,
    ICreateVechileProtocolRepository,
    GetVechicleByIdProtocolRepository,
    GetVechicleProtocolRepository,
    IDeleteVehicleRepository {}
