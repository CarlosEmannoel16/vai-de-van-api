import { Ticket } from '@/domain/Ticket/entity/Ticket';

export type TypesPayment = 'credit_card' | 'debit_card' | 'pix' | 'cash';

export class Payment {
  private _id: string;
  private _idCustomer: string;
  private _method: TypesPayment;
  private _tickets: Ticket[];
  private _status: boolean;

  constructor(
    id: string,
    idCustomer: string,
    method: TypesPayment,
    tickets: Ticket[],
  ) {
    this._id = id;
    this._idCustomer = idCustomer;
    this._method = method;
    this._tickets = tickets;
  }

  get amountPay(): number {
    return this._tickets.reduce((acc, ticket) => {
      return acc + ticket.amount;
    }, 0);
  }
}
