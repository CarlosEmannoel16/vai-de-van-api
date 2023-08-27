import { ITravelProtocolRepository } from './protocols/travel';
import { ICreateTravelProtocolRepository } from './protocols/travel/CreateTravelProtocolRepository';
import { IFindAllTravelsProtocolRepository } from './protocols/travel/FindAllTravelsProtocolRepository';
import { ISearchTravelProtocolRepository } from './protocols/travel/SearchTravelProtocolRepository';
import { PrismaClient, Travel, TripStops } from '@prisma/client';

const travel = new PrismaClient().travel;
export class TravelRepository implements ITravelProtocolRepository {
  async findAll(): Promise<IFindAllTravelsProtocolRepository.Params[]> {
    return travel.findMany({
      select: {
        id: true,
        departureDate: true,
        arrivalDate: true,
        Driver: {
          select: {
            id: true,
            User: true,
          },
        },
        Route: true,
        Vechicle: true,
        update_at: true,
        created_at: true,
      },
    });
  }
  async findById(id: string): Promise<any> {
    return travel.findUnique({ where: { id } });
  }

  async create(data: ICreateTravelProtocolRepository.Params): Promise<any> {
    console.log(data);
    return travel.create({
      data: {
        arrivalDate: data.arrivalDate,
        departureDate: data.arrivalDate,
        idVehicle: data.idVehicle,
        routeId: data.routeId,
        driverId: data.driverId,
      },
    });
  }

  async update(id: string, data: Travel): Promise<Travel> {
    return travel.update({ where: { id }, data });
  }

  async delete(id: string): Promise<any> {
    return travel.delete({ where: { id } });
  }
  
  async search(
    data: ISearchTravelProtocolRepository.Params,
  ): Promise<ISearchTravelProtocolRepository.Result[] | undefined> {
    const tripstops = new PrismaClient().tripStops;
    return tripstops.findMany({
      where: {
        Travel: {
          arrivalDate: data.dateOfTravel,
        },
        cityIdFromTo: data.destiny,
        City: {
          id: data.origin,
        }
      },
      
      select: {
        Travel: true,
        City: true,
        PricesBetweenStops: {
         
        },
        cityIdFromTo: true,
        id: true,
        travelId: true,
        tripStopOrder: true,
        
      }
    });
  }
}
