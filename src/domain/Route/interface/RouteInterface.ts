import { TripStopInterface } from "@/domain/TripStop/interface/TripStopInterface";

export interface RouterInterface {
  addTripStop(data: TripStopInterface[]): void;
  get id(): string;
  get name(): string;
  get km(): number;
  get kmValue(): number;
  get KmValueInReal(): string;
  get tripStops(): TripStopInterface[];
  get amountOfStops(): number;
  get initialStop(): TripStopInterface;
  get finalStop(): TripStopInterface;
}
