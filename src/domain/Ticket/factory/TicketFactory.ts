import { v4 } from 'uuid';
import { Ticket } from '../entity/Ticket';
import { TicketInterface } from '../interface/TicketInterface';

interface ParamsTicketFactoryCreate {
  id?: string;
  origin: string;
  destiny: string;
}

export class TicketFactory {
  static create(data: ParamsTicketFactoryCreate): TicketInterface {
    let idTicket = data.id;
    if (!idTicket) idTicket = v4();
    return new Ticket(idTicket, data.origin, data.destiny);
  }

  static mapCreate(data: ParamsTicketFactoryCreate[]): TicketInterface[] {
    return data.map(ticket => this.create(ticket));
  }
}
