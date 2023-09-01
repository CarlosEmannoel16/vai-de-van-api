import { ICreateCityRepository } from './CreateCityRepository';
import { IDisableCityRepository } from './DisableCityRepository';
import { IGetAllCitiesRepository } from './GetAllCitiesRepository';
import { IGetCityRepository } from './GetCityRepository';
import { IUpdateCityRepository } from './UpdateCityRepository';

export interface ICityProtocolRepository
  extends ICreateCityRepository,
    IGetAllCitiesRepository,
    IDisableCityRepository,
    IUpdateCityRepository ,
    IGetCityRepository{}
