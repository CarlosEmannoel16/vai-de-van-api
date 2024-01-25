import { Route } from '@/domain/Route/entity/Route';
import { Vehicle } from '../../Vehicle/entity/Vehicle';
import { Driver } from '@/domain/Driver/entity/Driver';
import { Ticket } from '@/domain/Ticket/entity/Ticket';
import { toMoney } from '@/@shared/utils/toMoney';
import { deprecate } from 'util';

export class Travel {
  private _id: string;
  private _Route: Route;
  private _name: string;
  private _Driver: Driver;
  private _Vehicle: Vehicle;
  private _Tickets: Ticket[];
  private _arrivalDate: Date;
  private _departureDate: Date;
  private _update_at: Date;
  private _created_at: Date;

  constructor(
    id: string,
    name: string,
    Route: Route,
    Driver: Driver,
    Vehicle: Vehicle,
    arrivalDate: Date,
    departureDate: Date,
  ) {
    this._id = id;
    this._name = name;
    this._Route = Route;
    this._Driver = Driver;
    this._Vehicle = Vehicle;
    this._arrivalDate = arrivalDate;
    this._departureDate = departureDate;

    this.validate();
  }

  validate() {
    const errors = [];
    if (!this._id) errors.push('id is required');
    if (!this._name) errors.push('name travel is required');
    if (!this._Driver) errors.push('idDriver is required');
    if (!this._Vehicle) errors.push('Vehicle is required');
    if (!this._arrivalDate) errors.push('arrivalDate is required');
    if (!this._departureDate) errors.push('departureDate is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get idVehicle(): string {
    return this._Vehicle.Id;
  }

  get arrivalDate(): Date {
    return this._arrivalDate;
  }

  get departureDate(): Date {
    return this._departureDate;
  }

  get idRoute(): string {
    return this._Route.id;
  }

  get idDriver(): string {
    return this._Driver.id;
  }

  get nameDriver(): string {
    return this._Driver.name;
  }


  get vehicle(): Vehicle {
    return this._Vehicle;
  }

  set update_at(update_at: Date) {
    this._update_at = update_at;
  }

  get update_at(): Date {
    return this._update_at;
  }

  set created_at(created_at: Date) {
    this._created_at = created_at;
  }

  get created_at(): Date {
    return this._created_at;
  }

  addTickets(ticket: Ticket[]) {
    this._Tickets = [...this._Tickets, ...ticket];
  }

  changeDepartureDate(departureDate: Date) {
    this._departureDate = departureDate;
  }

  getNameStopById(id: string): string {
    const stop = this._Route.stops.find(stop => stop.cityId === id);
    if (!stop) throw new Error('Stop not found');
    return stop.cityName;
  }

  getDateOfDepartureInBr(): string {
    return this._departureDate.toLocaleDateString('pt-br', {
      timeZone: 'America/Sao_Paulo',
    });
  }

  getValueBetweenStops(idStop1: string, idStop2: string): string {
    const stop1 = this._Route.stops.find(stop => stop.cityId === idStop1);
    const stop2 = this._Route.stops.find(stop => stop.cityId === idStop2);
    if (!stop1 || !stop2) throw new Error('Stop not found');
    if (stop1.tripStopOrder >= stop2.tripStopOrder)
      throw new Error('Stop1 must be less than stop2');

    let distance = 0;

    this._Route.stops?.map(stop => {
      if (
        stop.tripStopOrder > stop1.tripStopOrder &&
        stop.tripStopOrder <= stop2.tripStopOrder
      ) {
        distance += stop.distanceFromLast;
      }
    });

    return toMoney(distance * this._Route.kmValue);
  }

  get classificationVehicle(): number {
    return this._Vehicle.classification;
  }

  getQuantitySeatsBetweenStops(
    stopIdOrigin: string,
    stopIdDestiny: string,
  ): number {
    const stopOrigin = this._Route.stops.find(
      stop => stop.cityId === stopIdOrigin,
    );
    const stopDestiny = this._Route.stops.find(
      stop => stop.cityId === stopIdDestiny,
    );

    let quantityMaxOfSeats = this._Vehicle.quantitySeats;
    let travelFullQuantity = 0;

    //Removendo do total todas as viagens completas de ponto a ponto
    this._Tickets?.map(ticket => {
      if (
        ticket.origin === this._Route.initialStop.cityId &&
        ticket.destiny === this._Route.finalStop.cityId
      ) {
        travelFullQuantity += 1;
      }
    });

    quantityMaxOfSeats -= travelFullQuantity;

    //ver todas as origins anterior a origin atual
    // e ver todas as destinys posteriores a destiny atual

    const routeAfterOrigin = this._Route.stops.filter(stop => {
      if (stop.tripStopOrder >= stopOrigin.tripStopOrder) return stop;
    });

    const routeBeforeDestiny = this._Route.stops.filter(stop => {
      if (stop.tripStopOrder < stopDestiny.tripStopOrder) return stop;
    });

    if (routeAfterOrigin.length > 2) {
      routeAfterOrigin?.map(stop => {
        routeAfterOrigin?.map(stop2 => {
          if (stop.cityId === stop2.cityId) return;
          this._Tickets?.map(ticket => {
            if (
              ticket.origin === stop.cityId &&
              ticket.destiny === stop2.cityId
            )
              quantityMaxOfSeats -= 1;
          });
        });
      });
    }

    if (routeBeforeDestiny.length > 1) {
      routeBeforeDestiny?.map(stop => {
        routeAfterOrigin?.map(stop2 => {
          this._Tickets?.map(ticket => {
            if (
              ticket.origin === stop.cityId &&
              ticket.destiny === stop2.cityId
            )
              quantityMaxOfSeats -= 1;
          });
        });
      });
    }

    return quantityMaxOfSeats;
  }
}
