import { toMoney } from "@/@shared/utils/toMoney";
import { Route } from "@/domain/Route/entity/Route";
import { TravelInterface } from "../entity/travel.interface";

export class TravelService {
  static getValueBetweenStops(route:Route, idStop1: string, idStop2: string): string {
    const stop1 = route.stops.find(stop => stop.cityId === idStop1);
    const stop2 = route.stops.find(stop => stop.cityId === idStop2);
    if (!stop1 || !stop2) throw new Error('Stop not found');
    if (stop1.tripStopOrder >= stop2.tripStopOrder)
      throw new Error('Stop1 must be less than stop2');

    let distance = 0;

    route.stops?.map(stop => {
      if (
        stop.tripStopOrder > stop1.tripStopOrder &&
        stop.tripStopOrder <= stop2.tripStopOrder
      ) {
        distance += stop.distanceFromLast;
      }
    });

    return toMoney(distance * route.kmValue);
  }

  static getQuantitySeatsBetweenStops(
    travel: TravelInterface,
    stopIdOrigin: string,
    stopIdDestiny: string,
  ): number {
    const stopOrigin = travel.route.stops.find(
      stop => stop.cityId === stopIdOrigin,
    );
    const stopDestiny =travel.route.stops.find(
      stop => stop.cityId === stopIdDestiny,
    );

    let quantityMaxOfSeats = travel.vehicle.quantitySeats;
    let travelFullQuantity = 0;

    //Removendo do total todas as viagens completas de ponto a ponto
    travel.tickets?.map(ticket => {
      if (
        ticket.origin === travel.route.initialStop.cityId &&
        ticket.destiny === travel.route.finalStop.cityId
      ) {
        travelFullQuantity += 1;
      }
    });

    quantityMaxOfSeats -= travelFullQuantity;

    //ver todas as origins anterior a origin atual
    // e ver todas as destinys posteriores a destiny atual

    const routeAfterOrigin = travel.route.stops.filter(stop => {
      if (stop.tripStopOrder >= stopOrigin.tripStopOrder) return stop;
    });

    const routeBeforeDestiny = travel.route.stops.filter(stop => {
      if (stop.tripStopOrder < stopDestiny.tripStopOrder) return stop;
    });

    if (routeAfterOrigin.length > 2) {
      routeAfterOrigin?.map(stop => {
        routeAfterOrigin?.map(stop2 => {
          if (stop.cityId === stop2.cityId) return;
          travel.tickets?.map(ticket => {
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
          travel.tickets?.map(ticket => {
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
