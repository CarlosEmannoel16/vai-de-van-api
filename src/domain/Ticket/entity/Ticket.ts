import { StatusTicket } from '@prisma/client';
import { TicketInterface } from '../interface/TicketInterface';
import { TicketStatus } from '../interface/TicketStatus';

export class Ticket implements TicketInterface {
  private _id: string;
  private _origin: string;
  private _destiny: string;
  private _amount: number;
  private _idCustomer: string;
  private _status: TicketStatus;

  constructor(id: string, destiny: string, origin: string) {
    this._id = id;
    this._origin = origin;
    this._destiny = destiny;
  }

  get status(): TicketStatus {
    return this._status;
  }

  get id(): string {
    return this._id;
  }

  get origin(): string {
    return this._origin;
  }

  get destiny(): string {
    return this._destiny;
  }

  get idCustomer(): string {
    return this._idCustomer;
  }

  get amount(): number {
    return this._amount;
  }

  changeStatus(status: TicketStatus): void {
    this._status = status;
  }
}
