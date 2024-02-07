import { ILisTravelById } from '@/data/protocols/usecases/travels/FindTravelById';
import { IListAllTravels } from '@/data/protocols/usecases/travels/LisatAllTravels';
import { ITravelProtocolRepository } from '@/domain/Travel/repositories';
import { Travel } from '@prisma/client';

export class FindTravelById implements ILisTravelById {
  constructor(private readonly travelRepository: ITravelProtocolRepository) {}
  async execute(id: string): Promise<IListAllTravels.Result> {
    const data = await this.travelRepository.findById(id);
    return {
      amount_of_accents: data.vehicle.quantitySeats,
      arrivalDate: data.arrivalDate,
      created_at: data.created_at,
      departureDate: data.departureDate,
      driverId: data.idDriver,
      driverName: data.nameDriver,
      id: data.id,
      routeId: data.idRoute,
      update_at: data.update_at,
      vehicleId: data.idVehicle,
      description: data.description,
      routeDescription: data.description,
      status: data.status,
      vehicleName: data.vehicle.description,
    };
  }
}
