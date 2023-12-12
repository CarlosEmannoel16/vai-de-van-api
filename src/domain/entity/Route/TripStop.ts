import { v4 } from 'uuid';
export class TripStop {
  private readonly routeId: string;
  private readonly stopId: string;
  private tripStopOrder: number;
  private distanceFromNext: number;

  constructor(
    stopId = v4(),
    routeId: string,
    tripStopOrder: number,
    distanceFromNext: number,
  ) {
    this.tripStopOrder = tripStopOrder;
    this.distanceFromNext = distanceFromNext;
    this.routeId = routeId;
    this.stopId = stopId;
    this.validate();
  }

  private validate() {
    const fieldsMessage = [];
    if (!this.routeId) fieldsMessage.push('routeId is required');
    if (!this.stopId) fieldsMessage.push('stopId is required');
    if (!this.tripStopOrder) fieldsMessage.push('tripStopOrder is required');
    if (this.tripStopOrder < 0)
      fieldsMessage.push('tripStopOrder must be greater than 0');
    if (!this.distanceFromNext)
      fieldsMessage.push('distanceFromNext is required');
    if (this.distanceFromNext < 0)
      fieldsMessage.push('distanceFromNext must be greater than 0');

    if (fieldsMessage.length > 0) {
      throw new Error(fieldsMessage.join(', '));
    }
  }

  getStopId(): string {
    return this.stopId;
  }

  getTripStopOrder(): number {
    return this.tripStopOrder;
  }

  getDistanceFromNext(): number {
    return this.distanceFromNext;
  }

  getRouteId(): string {
    return this.routeId;
  }

  setTripStopOrder(tripStopOrder: number): void {
    this.tripStopOrder = tripStopOrder;
  }
}
