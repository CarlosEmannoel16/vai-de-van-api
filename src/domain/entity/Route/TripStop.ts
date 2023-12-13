import { PricesBetweenStops } from '@/domain/models/PricesBetweenStops';
import { v4 } from 'uuid';

export class TripStop {
  private routeId: string;
  private stopId: string;
  private cityId: string;
  private tripStopOrder: number;
  private distanceFromLast: number;
  private pricesBetweenStops: PricesBetweenStops[] = [];
  private isInitialStop: boolean = false;
  private isFinalStop: boolean = false;

  constructor(
    stopId = v4(),
    routeId: string,
    tripStopOrder: number,
    distanceFromLast: number,
    cityId: string,
  ) {
    this.tripStopOrder = tripStopOrder;
    this.distanceFromLast = distanceFromLast;
    this.routeId = routeId;
    this.stopId = stopId;
    this.cityId = cityId;
    this.validate();
  }

  private validate() {
    const fieldsMessage = [];
    if (!this.routeId) fieldsMessage.push('routeId is required');
    if (!this.stopId) fieldsMessage.push('stopId is required');
    if (!this.tripStopOrder) fieldsMessage.push('tripStopOrder is required');
    if (this.tripStopOrder < 0)
      fieldsMessage.push('tripStopOrder must be greater than 0');
    if (!this.cityId) fieldsMessage.push('cityId is required');
    if (fieldsMessage.length > 0) {
      throw new Error(fieldsMessage.join(', '));
    }
  }

  get StopId(): string {
    return this.stopId;
  }

  get TripStopOrder(): number {
    return this.tripStopOrder;
  }

  get DistanceFromLast(): number {
    return this.distanceFromLast;
  }

  get RouteId(): string {
    return this.routeId;
  }

  get CityId(): string {
    return this.cityId;
  }

  get PricesBetweenStops(): PricesBetweenStops[] {
    return this.pricesBetweenStops;
  }

  get IsInitialStop(): boolean {
    return this.isInitialStop;
  }

  get IsFinalStop(): boolean {
    return this.isFinalStop;
  }

  setInitialStop(): void {
    if (this.isFinalStop) throw new Error('Parada final não pode ser inicial');
    const Messages = [];
    if (Messages.length > 0) throw new Error(Messages.join(', '));

    this.isInitialStop = true;
  }

  setFinalStop(): void {
    if (this.isInitialStop)
      throw new Error('Parada inicial não pode ser final');
    const Messages = [];
    if (this.distanceFromLast < 0)
      Messages.push('distanceFromNext must be greater than 0');

    if (Messages.length > 0) throw new Error(Messages.join(', '));
    this.isFinalStop = true;
  }

  setTripStopOrder(tripStopOrder: number): void {
    this.tripStopOrder = tripStopOrder;
  }

  setPricesBetweenStops(pricesBetweenStops: PricesBetweenStops): void {
    this.pricesBetweenStops?.map(price => {
      if (price.destinyId === pricesBetweenStops.destinyId)
        throw new Error('Parada ja mapeada');
    });

    if (pricesBetweenStops.destinyId === this.cityId)
      throw new Error('Parada de origem não pode ser a mesma de destino');
    this.pricesBetweenStops.push(pricesBetweenStops);
  }
}
