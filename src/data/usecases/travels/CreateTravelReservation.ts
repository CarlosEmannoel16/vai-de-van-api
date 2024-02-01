import { ICreateReservationUseCase } from '@/data/protocols/usecases/travels/CreateReservation';
import { TicketFactory } from '@/domain/Ticket/factory/TicketFactory';
import { IFindTravelByIdProtocolRepository } from '@/domain/Travel/repositories/GetTravelByIdProtocolRepository';
import { IFindCustomerByCpfProtocolRepository } from '@/infra/protocols/customer/FindCustomerByCpfProtocolRepository';
import { IFindCustomerByIdProtocolRepository } from '@/infra/protocols/customer/FindCustomerByIdProtocolRepository';
import { table } from 'console';

export class CreateReservationUseCase implements ICreateReservationUseCase {
  constructor(
    private readonly findTravelById: IFindTravelByIdProtocolRepository,
    private readonly findCustomerByCpfRepository: IFindCustomerByCpfProtocolRepository,
    private readonly findCustomerByIdRepository: IFindCustomerByIdProtocolRepository,
  ) {}
  async execute({
    idTravel,
    idStopOrigin,
    idStopDestiny,
    idCustomer,
    cpfCustomer
  }: ICreateReservationUseCase.Params) {
    const travel = await this.findTravelById.findById(idTravel);

    if (!travel) throw new Error('Viagem não encontrada');

    const quantity = await travel.getQuantitySeatsBetweenStops(
      idStopOrigin,
      idStopDestiny,
    );
    if (!quantity) throw new Error('Não há vagas disponíveis');

    if (idCustomer) {
      const customer = await this.findCustomerByIdRepository.findById(
        idCustomer,
      );
      if (!customer) throw new Error('Cliente não encontrado');
    }

    const ticket = TicketFactory.create({
      destiny: idStopOrigin,
      origin: idStopOrigin,
    });
  }
}
