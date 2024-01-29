import { ICreateVehicleProtocolRepository } from './CreateVehicleProtocolRepository';
import { IDeleteVehicleRepository } from './DeleteVehicleRepository';
import { GetVehicleByIdProtocolRepository } from './GetVehicleByIdProtocolRepository';
import { GetVehicleProtocolRepository } from './GetVechileProtocolRepository';
import { GetVehicleByParamsProtocolRepository } from './GetVehicleByParamsProtocolRepository';
import { GetTravelsActivesFromVehicleRepository } from './GetTravelsActivesFromVehicleRepository';

export interface IVehicleProtocolRepository
  extends ICreateVehicleProtocolRepository,
    GetVehicleByIdProtocolRepository,
    GetVehicleProtocolRepository,
    IDeleteVehicleRepository,
    GetVehicleByParamsProtocolRepository,
    GetTravelsActivesFromVehicleRepository {}
