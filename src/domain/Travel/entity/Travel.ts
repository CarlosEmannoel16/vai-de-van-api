import { Route } from '@/domain/Route/entity/Route';
import { Vehicle } from '../../Vehicle/entity/Vehicle';
import { Driver } from '@/domain/Driver/entity/Driver';
import { Ticket } from '@/domain/Ticket/entity/Ticket';
import { toMoney } from '@/@shared/utils/toMoney';

export class Travel {
  private id: string;
  private Route: Route;
  private name: string;
  private Driver: Driver;
  private Vehicle: Vehicle;
  private tickets: Ticket[];
  private arrivalDate: Date;
  private departureDate: Date;

  constructor(
    id: string,
    name: string,
    Route: Route,
    Driver: Driver,
    Vehicle: Vehicle,
    arrivalDate: Date,
    departureDate: Date,
  ) {
    this.id = id;
    this.name = name;
    this.Route = Route;
    this.Driver = Driver;
    this.Vehicle = Vehicle;
    this.arrivalDate = arrivalDate;
    this.departureDate = departureDate;
    this.validate();
  }

  validate() {
    const errors = [];
    if (!this.id) errors.push('id is required');
    if (!this.name) errors.push('name travel is required');
    if (!this.Driver) errors.push('idDriver is required');
    if (!this.Vehicle) errors.push('Vehicle is required');
    if (!this.arrivalDate) errors.push('arrivalDate is required');
    if (!this.departureDate) errors.push('departureDate is required');
    if (errors.length > 0) throw new Error(errors.join(', '));
  }

  get Id(): string {
    return this.id;
  }

  get Name(): string {
    return this.name;
  }

  get IdVehicle(): string {
    return this.Vehicle.Id;
  }

  get ArrivalDate(): Date {
    return this.arrivalDate;
  }

  get DepartureDate(): Date {
    return this.departureDate;
  }

  changeDepartureDate(departureDate: Date) {
    this.departureDate = departureDate;
  }

  get IdRoute(): string {
    return this.Route.id;
  }

  get IdDriver(): string {
    return this.Driver.id;
  }

  get nameDriver(): string {
    return this.Driver.name;
  }

  addTickets(ticket: Ticket[]) {
    this.tickets = [...this.tickets, ...ticket];
  }

  getNameStopById(id: string): string {
    const stop = this.Route.stops.find(stop => stop.cityId === id);
    if (!stop) throw new Error('Stop not found');
    return stop.cityName;
  }

  getDateOfDepartureInBr(): string {
    return this.departureDate.toLocaleDateString('pt-BR');
  }

  getValueBetweenStops(idStop1: string, idStop2: string): string {
    const stop1 = this.Route.stops.find(stop => stop.cityId === idStop1);
    const stop2 = this.Route.stops.find(stop => stop.cityId === idStop2);
    if (!stop1 || !stop2) throw new Error('Stop not found');
    if (stop1.tripStopOrder >= stop2.tripStopOrder)
      throw new Error('Stop1 must be less than stop2');


    let distance = 0;

    this.Route.stops?.map(stop => {
      if (stop.tripStopOrder > stop1.tripStopOrder && stop.tripStopOrder <= stop2.tripStopOrder) {
        distance += stop.distanceFromLast
      }
    });

    return toMoney(distance * this.Route.kmValue);
  }

  get classificationVehicle(): number {
    return this.Vehicle.classification;
  }

  getQuantitySeatsBetweenStops(
    stopIdOrigin: string,
    stopIdDestiny: string,
  ): number {
    const stopOrigin = this.Route.stops.find(
      stop => stop.cityId === stopIdOrigin,
    );
    const stopDestiny = this.Route.stops.find(
      stop => stop.cityId === stopIdDestiny,
    );

    let quantityMaxOfSeats = this.Vehicle.QuantitySeats;
    let travelFullQuantity = 0;

    //Removendo do total todas as viagens completas de ponto a ponto
    this.tickets?.map(ticket => {
      if (
        ticket.origin === this.Route.initialStop.cityId &&
        ticket.destiny === this.Route.finalStop.cityId
      ) {
        travelFullQuantity += 1;
      }
    });

    quantityMaxOfSeats -= travelFullQuantity;

    //ver todas as origins anterior a origin atual
    // e ver todas as destinys posteriores a destiny atual

    const routeAfterOrigin = this.Route.stops.filter(stop => {
      if (stop.tripStopOrder >= stopOrigin.tripStopOrder) return stop;
    });

    const routeBeforeDestiny = this.Route.stops.filter(stop => {
      if (stop.tripStopOrder < stopDestiny.tripStopOrder) return stop;
    });


    if (routeAfterOrigin.length > 2) {
      routeAfterOrigin?.map(stop => {
        routeAfterOrigin?.map(stop2 => {
          if (stop.cityId === stop2.cityId) return;
          this.tickets?.map(ticket => {
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
          this.tickets?.map(ticket => {
            if (
              ticket.origin === stop.cityId &&
              ticket.destiny === stop2.cityId
            )
              quantityMaxOfSeats -= 1;
          });
        });
      });
    }

    return quantityMaxOfSeats
  }
}
