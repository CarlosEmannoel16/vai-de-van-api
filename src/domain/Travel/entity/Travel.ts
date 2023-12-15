import { Route } from '@/domain/Route/Route';
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
    return this.Route.Id;
  }

  get IdDriver(): string {
    return this.Driver.Id;
  }

  get nameDriver(): string {
    return this.Driver.Name;
  }

  addTickets(ticket: Ticket[]) {
    this.tickets = [...this.tickets, ...ticket];
  }

  getNameStopById(id: string): string {
    const stop = this.Route.Stops.find(stop => stop.CityId === id);
    if (!stop) throw new Error('Stop not found');
    return stop.CityName;
  }

  getDateOfDepartureInBr(): string {
    return this.departureDate.toLocaleDateString('pt-BR');
  }

  getValueBetweenStops(idStop1: string, idStop2: string): string {
    const stop1 = this.Route.Stops.find(stop => stop.CityId === idStop1);
    const stop2 = this.Route.Stops.find(stop => stop.CityId === idStop2);
    if (!stop1 || !stop2) throw new Error('Stop not found');
    if (stop1.TripStopOrder >= stop2.TripStopOrder)
      throw new Error('Stop1 must be less than stop2');


    let distance = 0;

    this.Route.Stops?.map(stop => {
      if (stop.TripStopOrder > stop1.TripStopOrder && stop.TripStopOrder <= stop2.TripStopOrder) {
        distance += stop.DistanceFromLast
      }
    });

    return toMoney(distance * this.Route.KmValue);
  }

  get classificationVehicle(): number {
    return this.Vehicle.classification;
  }

  getQuantitySeatsBetweenStops(
    stopIdOrigin: string,
    stopIdDestiny: string,
  ): number {
    const stopOrigin = this.Route.Stops.find(
      stop => stop.CityId === stopIdOrigin,
    );
    const stopDestiny = this.Route.Stops.find(
      stop => stop.CityId === stopIdDestiny,
    );

    let quantityMaxOfSeats = this.Vehicle.QuantitySeats;
    let travelFullQuantity = 0;

    //Removendo do total todas as viagens completas de ponto a ponto
    this.tickets?.map(ticket => {
      if (
        ticket.Origin === this.Route.InitialStop.CityId &&
        ticket.Destiny === this.Route.FinalStop.CityId
      ) {
        travelFullQuantity += 1;
      }
    });

    quantityMaxOfSeats -= travelFullQuantity;

    //ver todas as origins anterior a origin atual
    // e ver todas as destinys posteriores a destiny atual

    const routeAfterOrigin = this.Route.Stops.filter(stop => {
      if (stop.TripStopOrder >= stopOrigin.TripStopOrder) return stop;
    });

    const routeBeforeDestiny = this.Route.Stops.filter(stop => {
      if (stop.TripStopOrder < stopDestiny.TripStopOrder) return stop;
    });


    if (routeAfterOrigin.length > 2) {
      routeAfterOrigin?.map(stop => {
        routeAfterOrigin?.map(stop2 => {
          if (stop.CityId === stop2.CityId) return;
          this.tickets?.map(ticket => {
            if (
              ticket.Origin === stop.CityId &&
              ticket.Destiny === stop2.CityId
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
              ticket.Origin === stop.CityId &&
              ticket.Destiny === stop2.CityId
            )
              quantityMaxOfSeats -= 1;
          });
        });
      });
    }

    return quantityMaxOfSeats
  }
}
