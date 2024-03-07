import { toMoney } from '@/@shared/utils/toMoney';
import { Route } from '@/domain/Route/entity/Route';
import { TravelInterface } from '../Interfaces/travel.interface';
import { TripStop } from '@/domain/TripStop/entity/TripStop';
import { MessagesConfig } from '@/@shared/language/Messages';
import { Messages } from '@/@shared/language';

export class TravelService {
  static getValueBetweenStops(
    route: Route,
    idStop1: string,
    idStop2: string,
  ): string {
    const stop1 = route.tripStops.find(
      tripStop => tripStop.stop.id === idStop1,
    );
    const stop2 = route.tripStops.find(
      tripStop => tripStop.stop.id === idStop2,
    );
    if (!stop1 || !stop2) throw new Error('Stop not found');
    if (stop1.stopOrder >= stop2.stopOrder)
      throw new Error('Stop1 must be less than stop2');

    let distance = 0;

    route.tripStops?.map(tripStop => {
      if (
        tripStop.stopOrder > stop1.stopOrder &&
        tripStop.stopOrder <= stop2.stopOrder
      ) {
        distance += tripStop.distanceFromLast;
      }
    });

    return toMoney(distance * route.kmValue);
  }

  static getQuantitySeatsBetweenStops(
    travel: TravelInterface,
    stopIdOrigin: string,
    stopIdDestiny: string,
  ): number {
    const stopOrigin = travel.route.tripStops.find(
      tripStop => tripStop.stop.id === stopIdOrigin,
    );
    const stopDestiny = travel.route.tripStops.find(
      tripStop => tripStop.stop.id === stopIdDestiny,
    );

    let quantityMaxOfSeats = travel.vehicle.quantitySeats;
    let travelFullQuantity = 0;

    //Removendo do total todas as viagens completas de ponto a ponto
    travel.tickets?.map(ticket => {
      if (
        ticket.origin === travel.route.initialStop.stop.id &&
        ticket.destiny === travel.route.finalStop.stop.id
      ) {
        travelFullQuantity += 1;
      }
    });

    quantityMaxOfSeats -= travelFullQuantity;

    //ver todas as origins anterior a origin atual
    // e ver todas as destinys posteriores a destiny atual

    const routeAfterOrigin = travel.route.tripStops.filter(stop => {
      if (stop.stopOrder >= stopOrigin.stopOrder) return stop;
    });

    const routeBeforeDestiny = travel.route.tripStops.filter(stop => {
      if (stop.stopOrder < stopDestiny.stopOrder) return stop;
    });

    if (routeAfterOrigin.length > 2) {
      routeAfterOrigin?.map(stop => {
        routeAfterOrigin?.map(stop2 => {
          if (stop.stop.id === stop2.stop.id) return;
          travel.tickets?.map(ticket => {
            if (
              ticket.origin === stop.stop.id &&
              ticket.destiny === stop2.stop.id
            )
              quantityMaxOfSeats -= 1;
          });
        });
      });
    }

    if (routeBeforeDestiny.length > 1) {
      routeBeforeDestiny?.map(stop => {
        routeAfterOrigin?.map(stop2 => {
          travel.tickets?.map(ticket => {
            if (
              ticket.origin === stop.stop.id &&
              ticket.destiny === stop2.stop.id
            )
              quantityMaxOfSeats -= 1;
          });
        });
      });
    }

    return quantityMaxOfSeats;
  }

  static getQuantityStopsBetweenStops(
    route: Route,
    idStop1: string,
    idStop2: string,
  ): number {
    const stop1 = route.tripStops.find(
      tripStop => tripStop.stop.id === idStop1,
    );
    const stop2 = route.tripStops.find(
      tripStop => tripStop.stop.id === idStop2,
    );
    if (!stop1 || !stop2) throw new Error(Messages.stop.stopNotFound);
    if (stop1.stopOrder >= stop2.stopOrder)
      throw new Error('Stop1 must be less than stop2');

    return stop2.stopOrder - stop1.stopOrder;
  }
}
